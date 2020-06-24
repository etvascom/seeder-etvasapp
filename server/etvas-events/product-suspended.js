/**
 * This handler is called when the product.suspended event is emitted
 * in ETVAS Platform. The app receives this event as a POST request,
 * on the URL provided in Platform at product setup. The SDK
 * automatically routes the event to this handler, which receives
 * the payload as an object containing userId and purchaseId. Both
 * of them are UUID v4, 36 character strings.
 *
 * The SDK will also verify the identity of the caller for you, so
 * you know you're safe!
 *
 * Remember, the purchaseId can be used as context in headers when
 * calling ETVAS Platform API directly or with the help of SDK.
 */
const etvas = require('@etvas/etvas-sdk')

/**
 * Product Suspended handler function
 *
 * @param {object} payload The event payload
 * @returns True or object
 */
const handler = async ({ userId, purchaseId }) => {
  // The purchase was suspended due to ETVAS Platform
  // inability to debit the customer's Credit or Debit Card
  // This means the user should not be able to use
  // the services provided by this integration.

  // Retrieve previously stored internal ID
  // const internalId = myApiClient.createSubscription(purchaseId)
  const { internalId } = etvas.client.read(purchaseId)
  if (internalId) {
    // Inform your API to suspend the subscription
    // await myApi.suspendSubscription(internalId)
  }

  // You can simply return true for a HTTP/1.1 204 No Content
  // response. You also can return an object, which will be used for
  // a HTTP/1.1 200 OK response, with the body containing the JSON
  // encoded object

  // If you throw an error, it will be used to generate a
  // HTTP/1.1 500 Server Error, with a JSON response containing
  // the error message.

  return true
}

module.exports = {
  name: 'product.suspended',
  handler,
}
