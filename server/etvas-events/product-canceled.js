/**
 * This handler is called when the product.canceled event is emitted
 * in ETVAS Platform. The app receives this event as a POST request,
 * on the URL provided in Platform at product setup. The SDK
 * automatically routes the event to this handler, which receives
 * the payload as an object containing productId and purchaseId. Both
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
 * Product Canceled handler function
 *
 * @param {object} payload The event payload
 * @returns True or object
 */
const handler = async ({ productId, purchaseId }) => {
  // If you previously stored your internal ID in ETVAS
  // platform, you can retrieve and co a cleanup on your side
  const { internalId } = etvas.client.read(purchaseId)

  if (internalId) {
    // cleanup your API
    // await myApi.removeSubscription(internalId)
  }

  // Cleanup any data stored in ETVAS Platform
  await etvas.client.clear(purchaseId)
  await etvas.client.clear(productId)

  // Remember, a product.canceled event means the customer can
  // buy the same product / service (with the same productId) again.

  // You can simply return true for a HTTP/1.1 204 No Content
  // response. You also can return an object, which will be used for
  // a HTTP/1.1 200 OK response, with the body containing the JSON
  // encoded object

  // If you throw an error, it will be used to generate a
  // HTTP/1.1 500 Server Error, with a JSON response containing
  // the error message.

  return true
}

// Register the handler
module.exports = {
  // The name of the event, so the SDK knows how to route it.
  name: 'product.canceled',
  handler,
}
