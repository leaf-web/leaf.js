# leaf.http.get

Shorthand function to execute a HTTP GET request.

----------------------------------------------------------------------

## Usage

leaf.http.get(url, [options]).then([success], [failure])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| url             | `string`      | The URL.                         |
| options         | `Object`      | The request options.             |

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| headers         | `Array`       | The request headers.             |
| method          | `string`      | The request method.              |
| password        | `string`      | The password.                    |
| url             | `string`      | The URL.                         |
| username        | `string`      | The username.                    |

----------------------------------------------------------------------

## Example

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                leaf.http.get('people.html').then(
            		function(data) {
            			console.log('People.html was requested successfully.');
        			},
            		function(status) {
            			console.log('An error occurred requesting people.html.');
        			},        			
        		);
            </script>
        </body>
    </html>    