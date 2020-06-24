const productPurchased = require('./product-purchased')
const productCanceled = require('./product-canceled')
const productSuspended = require('./product-suspended')
const productRepurchased = require('./product-repurchased')

module.exports = [
  productPurchased,
  productCanceled,
  productSuspended,
  productRepurchased,
]
