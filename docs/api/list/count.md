# List.count

Return the number of models in the list.

----------------------------------------------------------------------

## Usage

List.count();

### Returns

`number` The number of models.

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

				console.log(People.count())); //returns 2
			</script>
		</body>
	</html>	