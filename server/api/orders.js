const router = require('express').Router();
const {Order, LineItem} = require('../db/models');
const {loginRequired, adminGateway} = require('../utils');

router.get('/', async (req, res, next) => {
  try {
    let where = {};
    const orderStatus = req.query.status;
    const viewAsAdmin = req.query.viewAsAdmin === 'true';
    const statusVals = ['active', 'created', 'shipped', 'cancelled', 'delivered'];
    if(orderStatus && !statusVals.includes(orderStatus)){
      res.sendStatus(400);
      return;
    }
    if (req.user) {
      const isAdmin = req.user.isAdmin;
      const userId = req.user.id;
      if (!viewAsAdmin || !isAdmin) {
        where.userId = userId;
      }
    } else {
      where.userId = null;
      // where.sessionId =
    }
    if (orderStatus) {
      where.status = orderStatus;
    }
    let options = {
      where,
      include: [{model: LineItem}]
    };

    const orders = await Order.findAll(options);
    res.json(orders);
  } catch(err) {
    next(err);
  }
});

router.get('/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const userId = req.user.id;
    const isAdmin = req.user.isAdmin;
    let options = {
      where: {orderId},
      include: [{model: LineItem}]};
    let {where} = options;

    if (!isAdmin) {
      where.userId = userId;
    }

    const order = await Order.findOne(options);

    if (order) {
      res.status(200);
      res.send(order);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:orderId', loginRequired, adminGateway, async (req, res, next) => {
  const orderId = req.params.orderId;
  const {status} = req.body;
  try{
    const order = await Order.findOne({where: {id: orderId}});
    if (order) {
      await order.update(status);
      res.json(order);
    }
  } catch(err) {
    next(err)
  }
});

module.exports = router
