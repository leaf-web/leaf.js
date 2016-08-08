# leaf.http.request

 Executes a HTTP request.

----------------------------------------------------------------------

## Usage

leaf.http.request(options, [success], [failure])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| options         | `Object`      | The request options.             |
| success         | `Function`    | The success callback.            |
| failure         | `Function`    | The failure callback.            |

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
                leaf.http.request(
                	{
                		url: 'people.html',
                		method: 'get'
            		}, 
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