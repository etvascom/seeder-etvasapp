/**
 * This handler is called when the product.purchased event is emitted
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
 * Product Canceled handler function
 *
 * @param {object} payload The event payload
 * @returns True or object
 */
const handler = async ({ userId, purchaseId }) => {
  // A new purchase was made on this product or service.
  // Create the user on your API. You should not
  // use the userId parameter, but only the purchaseId.

  // const internalId = myApiClient.createSubscription(purchaseId)
  const internalId = 'internal-id'

  // You can optionally store your id in Etvas Platform
  await etvas.client.write(purchaseId, { internalId })

  // You can simply return true for a HTTP/1.1 204 No Content
  // response. You also can return an object, which will be used for
  // a HTTP/1.1 200 OK response, with the body containing the JSON
  // encoded object

  // If you throw an error, it will be used to generate a
  // HTTP/1.1 500 Server Error, with a JSON response containing
  // the error message.

  // Warning: throwing an error will block the purchase flow and the
  // product/service will remain in a non-purchased status. The issue
  // must be solved by Human Support channels.

  return true
}

// Register the handler
module.exports = {
  // The name of the event, so the SDK knows how to route it.
  name: 'product.purchased',
  handler,
}
