# leaf.http.put

Shorthand function to execute a HTTP PUT request.

----------------------------------------------------------------------

## Usage

leaf.http.put(url, data, [options]).then([success], [failure])

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
