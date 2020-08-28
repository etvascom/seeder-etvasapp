# Etvas App

An Etvas App is an application (both Back and Front End) that can run inside an `iframe` fully integrated in the Etvas Customer Portal. It **must** be hosted on a `HTTPS` URL, so the Etvas Customer Portal can load it.

Each product listed in Customer Portal has the URL of the Etvas App configured as a property. When the End Customer uses the product (after the purchase process is successfully finished), the Etvas App is loaded from the specified URL.

## Data flow

> Note: if you are using [etvas-sdk](https://github.com/etvascom/etvas-sdk), everything is simpler. Please consult the [documentation](https://github.com/etvascom/etvas-sdk).

The common data flow is:

1. The customer purchases the product
2. The customer clicks Use Product
3. Other asynchronous events

### First,

The customer purchases your product, using the payment gateway embedded in Etvas Platform. When and if the payment finish with a success code, an `product.purchased` event is sent to your pre-defined URL. More info [here](#events).

### Second,

The Etvas Application (or Etvas App) is launched in an `iframe` with a generated **token** present in the query, when the user clicks on `Use product` button.

The Etvas App communicates the token to it's BackEnd, which `POST`s it at the `/verify-token` endpoint, decorating the request with the appropriate header for the API key.

It resembles something like this:

```
HTTP/1.1 POST https://api.etvas.com/verify-token
Content-Type: application/json
Accept: application/json
x-api-key: your-api-key-here

{
  "token": "received-token-here"
}
```

The success response is:

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "contextId": "context-is-uuid-36-chars-long-string",
  ...
}
```

You should always _always_ **always** verify the received token.

You can use the context to get the customer profile:

```
HTTP/1.1 GET https://api.etvas.com/user/profile
Accept: application/json
x-api-key: your-api-key-here
x-etvas-context: context-is-uuid-36-chars-long-string

--
HTTP/1.1 200 OK
Content-Type: application/json

{
  "firstName": "The customer's first name",
  "lastName": "The customer's last name",
  "email": "customer@etvas.com",
  "phoneNumber": "+1234345456"
}
```

You should create the resources in your back-end to accommodate this new customer.

At this step, if you need additional resources, you can use the UI of the Etvas App to ask for more information from the user and process them. From here on, you have the full control over the data and customer flow. You can implement all the logic in Etvas App (the preferred way) or redirect the user to your web application.

In the latter case, you **must** use a mechanism to automatically and secure login the customer. Double login has a very heavy negative impact on User Experience and the Etvas Policy forbids such behaviors.

Bear in mind, by using the Etvas App UI (which uses the `npm` package [etvas-kit](https://github.com/etvascom/etvas-kit)), you can take advantage of an unified UI, the custom theme embedded in each customer portal and the implementation of the **I18N** multi-language, meaning when a customer sets up his or hers profile in German, everything is translated into German, even the Etvas App. All of these are made and ready for you to use.

### Events

Various events needs to be communicated by Etvas Platform to Etvas App. We present below a list with the events you can choose to receive, configured in your platform account.

> Note: if you are using [etvas-sdk](https://github.com/etvascom/etvas-sdk), everything is simpler. Please consult the [documentation](<(https://github.com/etvascom/etvas-sdk)>).

All events are `POST` requests made to the pre-defined URL you specify in your platform account. They all have the following signature:

```
HTTP/1.1 POST /etvas/events
Content-Type: application/json
Accept: application/json
x-api-key: the-api-key

{
  "name": "event.name",
  "payload": {
    "productId": "uuid-36-char-long-string",
    "contextId": "uuid-36-char-long-string"
  }
}
```

> Note: You should always use the contextId (which resembles a purchaseId) and not the productId. The same customer can buy more than once the same product, resulting in a repeated `productId` but a different `contextId`.

> **Warning** The response you return matter. If you return a `200 OK` or a `204 No Content` response, the event will be marked and logged as successful. If you return a `30X Redirect`, the platform will follow up to 5 redirects. If there are more, the response will be considered a failure. Anything in the range `4XX` or `5XX` will also be considered a failure.

#### Product purchased

This event is emitted when the purchase is successful and the customer's card is successfully charged in Etvas Platform. After this event is processed successfully, the customer should be able to fully access the bought product/service.

The `name` of this event is `product.purchased`:

```
HTTP/1.1 POST /etvas/events
Content-Type: application/json
Accept: application/json
x-api-key: the-api-key

{
  "name": "product.purchased",
  "payload": {
    "productId": "uuid-36-char-long-string",
    "contextId": "uuid-36-char-long-string"
  }
}
```

This event is formal, meaning you can control the outcome based on the HTTP status you return. If you respond with a success HTTP status, the product is marked as purchased and the user can use it. If not (a HTTP status of `4xx` or `5xx`), the product will be marked as Failed Purchase and the matter must be resolved by human support intervention. Needless to say, nobody wants this situation.

#### Purchase canceled

This event is emitted in two situations: when the customer chooses to cancel his subscription OR when a specific time-based subscription reaches it's end-of-time moment.

After processing this event, the customer should not be able to access the canceled purchase or services.

The `name` of this event is `purchase.canceled`:

```
HTTP/1.1 POST /etvas/events
Content-Type: application/json
Accept: application/json
x-api-key: the-api-key

{
  "name": "purchase.canceled",
  "payload": {
    "productId": "uuid-36-char-long-string",
    "contextId": "uuid-36-char-long-string"
  }
}
```

This event is informal, meaning your response to the request will be logged, but you cannot control the outcome by returning a certain HTTP status.

#### Product suspended

This event is emitted when a subsequent (subscription based) payment cound not be charged to the customer credit or debit card.

After processing this event, the customer should not be able to access the suspended product or services.

The `name` of this event is `product.suspended`:

```
HTTP/1.1 POST /etvas/events
Content-Type: application/json
Accept: application/json
x-api-key: the-api-key

{
  "name": "product.suspended",
  "payload": {
    "productId": "uuid-36-char-long-string",
    "contextId": "uuid-36-char-long-string"
  }
}
```

This event is informal, meaning your response to the request will be logged, but you cannot control the outcome by returning a certain HTTP status.

Also, the outcome of this event is reversible by the `product.repurchased` event.

#### Product repurchased (resumed)

This event is emitted when a suspended product is resolved: the customer updated the payment method in his/hers account and the payment went through with a success status.

After processing this event, the customer should be able to access the resumed product or services, without any data loss due to purchase suspended operation.

The `name` of this event is `product.repurchased`:

```
HTTP/1.1 POST /etvas/events
Content-Type: application/json
Accept: application/json
x-api-key: the-api-key

{
  "name": "product.repurchased",
  "payload": {
    "productId": "uuid-36-char-long-string",
    "contextId": "uuid-36-char-long-string"
  }
}
```

This event is informal, meaning your response to the request will be logged, but you cannot control the outcome by returning a certain HTTP status.

Also, the outcome of this event is reversible by the `product.suspended` event.

#### User deleted

This event is emitted when a user chooses to delete his/hers account. Please consult the GDPR resources available regarding the personal information that must be deleted or anonymized.

After processing this event, the customer should not be able to access the resumed product or services, and all the information stored **must** be deleted or anonymized.

The `name` of this event is `user.deleted`:

```
HTTP/1.1 POST /etvas/events
Content-Type: application/json
Accept: application/json
x-api-key: the-api-key

{
  "name": "user.deleted",
  "payload": {
    "productId": "uuid-36-char-long-string",
    "contextId": "uuid-36-char-long-string"
  }
}
```

This event is informal, meaning your response to the request will be logged, but you cannot control the outcome by returning a certain HTTP status.

## Using Etvas Platform for storing and retrieving information

> Note: if you are using [etvas-sdk](https://github.com/etvascom/etvas-sdk), everything is simpler. Please consult the [documentation](https://github.com/etvascom/etvas-sdk).

You have at your disposal a very fast, key-value storage offered by Etvas Platform. You can store a string value of max **100K**.

Typically you use the `context` as key but you can use anything you like, as long as it's a string. You have three operations at your fingertips: read, write and clear.

The **read** operation is, of course, a `GET` request:

```
HTTP/1.1 GET /external-data/key-index
Accept: application/json
x-api-key: your-provided-api-key

--
HTTP/1.1 200 OK
Content-Type: application/json

{
  "data": "your-previously-stored-data"
}
```

> **Note:** the query will not be failing if no data is stored, but simply return a null value in `data` attribute.

A **write** operation is - don't get ahead of me - a `POST` operation :)

```
HTTP/1.1 POST /external-data/key-index
Content-Type: application/json
x-api-key: your-provided-api-key

{
  "data": "a string you want to store, it can easily be a JSON encoded object"
}

--
HTTP/1.1 200 OK
```

If you choose to send JSON encoded objects (which might be the primary use), please take into account the maximum **100K** bytes for the _resulting_ JSON.

If you use Base 64 encoding (i.e. for binary data), you have to multiply the byte size by approx. 1.6 (which is the approximate increase in length when you use this encoding).

You can **clear** the stored data in two ways: storing a `null` value in a _write_ operation or calling the following delete method:

```
HTTP/1.1 DELETE /external-data/key-index
x-api-key: your-provided-api-key

--
HTTP/1.1 200 OK
```

**OR**

```
HTTP/1.1 POST /external-data/key-index
Content-Type: application/json
x-api-key: your-provided-api-key

{
  "data": null
}

--
HTTP/1.1 200 OK
```
