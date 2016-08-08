# Model.toJSON

Return a new instance of the model.

----------------------------------------------------------------------

## Usage

Model.toJSON();

### Returns

`string` A JSON string.

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

				console.log(Person.toJSON());
			</script>
		</body>
	</html>	