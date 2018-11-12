# petstoreApiTest
Use Swagger Petstore API to generate client and write test against it.


## Gen Petstore API

```
yarn genApi
```

The command above will generate a new client.
You don't really need to generate it but if you really want to, you can.

2018/11/12 : The client seem to have 2 bugs.
* It uses an http property that is no longer exposed
* it is missing a curly brace in one of the files