# petstoreApiTest
Use Swagger Petstore API to generate client and write test against it.


## Gen Petstore API - Swagger Code Gen 2.0

```
yarn genApi
```

The command above will generate a new client.
You don't really need to generate it but if you really want to, you can.
This is using a V2.0 swagger documentation instead of the newer v3.0.0 openapi definition.

2018/11/12 : The client seem to have 1 bug.
* It uses an http property `ClientResponse` that is no longer exposed. You need to replace it with `IncomingMessage` and things work good.