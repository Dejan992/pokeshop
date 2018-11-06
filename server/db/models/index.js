const User = require('./user')
const Product = require('./product')
const Category = require('./category');
const LineItem = require('./lineItem');
const Order = require('./order');
const EmailToken = require('./emailToken');
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Product.belongsToMany(Category, { through: 'CategoryProducts', as: 'Category'});
Category.belongsToMany(Product, { through: 'CategoryProducts' });
LineItem.belongsTo(Order);
Order.hasMany(LineItem);

LineItem.belongsTo(Product);
Product.hasMany(LineItem)
Order.belongsTo(User);
User.hasMany(Order);

EmailToken.belongsTo(User); // each email token has a userId key
User.hasMany(EmailToken);  // not sure if has many
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User, Product, Category, LineItem, Order, EmailToken
}
