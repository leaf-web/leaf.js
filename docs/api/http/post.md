# leaf.http.post

Shorthand function to execute a HTTP POST request.

----------------------------------------------------------------------

## Usage

leaf.http.post(url, data, [options]).then([success], [failure])

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

## Example

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
            	var person = {
            		firstName: 'John',
            		lastName: 'Doe'
            	}
				leaf.http.post('api/person', JSON.stringify(data), {
						headers: {
							"content-type": "application/json"
						}
				}).then(
					function () {
						alert('Saved');
					}
				);
            </script>
        </body>
    </html>
