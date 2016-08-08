# leaf.http.include

horthand function to execute a HTTP GET request and put the content in an element.

----------------------------------------------------------------------

## Usage

leaf.http.include(url, selector, [success], [failure])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| url             | `string`      | The URL.                         |
| selector        | `string`      | The selector.                    |
| success         | `Function`    | The success callback.            |
| failure         | `Function`    | The failure callback.            |

----------------------------------------------------------------------

## Example


	<html>	
		<body>
			<main id="main"></main>

			<script src="scripts/leaf.min.js"></script>
			<script>	
				leaf.http.include('people.html', '#main');
			</script>
		</body>
	</html>	