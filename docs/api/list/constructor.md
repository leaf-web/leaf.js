# Constructor

The constructor function.

----------------------------------------------------------------------

## Usage

new leaf.List([items], [success], [failure])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| items           | `string`      | The JSON url.                    |
| items           | `Array`       | The `Model` array.               |
| success         | `Function`    | The success callback.            |
| failure         | `Function`    | The failure callback.            |

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				var Person = new leaf.Model({
					"lastName": "Doe",
					"firstName": "John"
				});

				console.log(Person.get('firstName')); //returns "John"
			</script>
		</body>
	</html>	