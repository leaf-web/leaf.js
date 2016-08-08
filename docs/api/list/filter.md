# List.filter

Remove models that meet a condition.

----------------------------------------------------------------------

## Usage

List.filter(comparer);

----------------------------------------------------------------------

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| comparer        | `function`    | The comparer `function`.         |

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				var People = new leaf.List([
					{ "firstName": "John", "lastName": "Doe" },
					{ "firstName": "Jane", "lastName": "Doe" }	
				]);

				People.filter(function(model) {
					return model.get('firstName') != 'Jane';
				});

				console.log(People.template('Hello {{firstName}} {{lastName}}\n'));
			</script>
		</body>
	</html>	