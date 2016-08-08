# leaf.http.patch

Shorthand function to execute a HTTP PATCH request.

----------------------------------------------------------------------

## Usage

leaf.http.patch(url, data, [options]).then([success], [failure])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| url             | `string`      | The URL.                         |
| data            | `*`           | The data.                        |
| options         | `Object`      | The request options.             |

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| headers         | `Array`       | The request headers.             |
| method          | `string`      | The request method.              |
| password        | `string`      | The password.                    |
| url             | `string`      | The URL.                         |
| username        | `string`      | The username.                    |
