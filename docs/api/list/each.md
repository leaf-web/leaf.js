# List.each

Execute a callback Function for each model in the list.

----------------------------------------------------------------------

## Usage

List.each(cb);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| cb              | `Function`    | The callback `Function`.         |

### Notes

The model and index are passed as parameters to the callback `Function`.

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

				People.each(function(model, index) {
					console.log(model.get('firstName'));
				});
			</script>
		</body>
	</html>	