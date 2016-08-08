# Model.on

Sets a callback Function for the specified key. 

----------------------------------------------------------------------

## Usage

Model.on(key, cb);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| key             | `string`      | The key.                         |
| cb              | `Function`    | The callback `Function`.         |

### Notes

The value is passed as a parameter to the callback `Function`.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				var Person = new leaf.Model({
					"lastName": "Smith",
					"firstName": "Jane"
				});

				Person.on('lastName', function(value) {
					console.log('The lastname is now ' + value + '.');
				});

				Person.set('lastName', 'Doe');
			</script>
		</body>
	</html>	