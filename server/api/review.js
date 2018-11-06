const router = require('express').Router()
const { Product, Category, Review, User } = require('../db/models')
const { loginRequired, adminGateway } = require('../utils')

router.get('/', async (req, res, next) => {
  try {
    const productId = req.query.productId
    const currentProductReviews = await Review.findAll({
      where: {
        productId: productId,
      },
      include: [
        {
          model: User
        }
      ]
    })
    res.json(currentProductReviews)
  } catch (err) {
    next(err)
  }
})

router.post('/', loginRequired, async (req, res, next) => {
  //destructure just to make sure what is in the review
  const { content, rating } = req.body
  const { id } = req.user.dataValues
  const userId = id
  const productId = req.query.productId
  const newReview = { content, rating, userId, productId }

  try {
    const review = await Review.create(newReview)
    const reviewWithUser = await Review.findById(review.id, {
      include: [
        {
          model: User
        }
      ]
    })
    res.json(reviewWithUser)
  } catch (err) {
    next(err)
  }
})

router.put('/:productId', loginRequired, async (req, res, next) => {
  const productId = req.params.productId
  // ignores id in request body - not sure if RESTful
  const { title, price, imageUrl, stockQuantity, categoryId } = req.body
  const newData = { title, price, categoryId, stockQuantity }

  if (imageUrl) newData.imageUrl = imageUrl
  try {
    const product = await Product.findById(productId)
    if (product) {
      await product.update(newData)
      await product.setCategory(categoryId)
      const updatedProduct = await Product.findById(productId, {
        include: [
          {
            model: Category,
            as: 'Category',
            attributes: ['id', 'categoryType'],
            through: {
              attributes: []
            }
          }
        ]
      })
      res.json(updatedProduct) // matches get request to api/products/:productId
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
