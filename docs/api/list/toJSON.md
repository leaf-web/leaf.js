# List.toJSON

Serialize the list to JSON format.

----------------------------------------------------------------------

## Usage

List.toJSON();

### Returns

`string` A JSON string.

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

				console.log(People.toJSON());
			</script>
		</body>
	</html>	