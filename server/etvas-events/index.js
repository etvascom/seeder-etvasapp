const purchaseSucceeded = require('./purchase-succeeded')
const purchaseCanceled = require('./purchase-canceled')
const purchaseSuspended = require('./purchase-suspended')
const purchaseResumed = require('./purchase-resumed')
const userDeleted = require('./user-deleted')

module.exports = [
  purchaseSucceeded,
  purchaseCanceled,
  purchaseSuspended,
  purchaseResumed,
  userDeleted,
]
