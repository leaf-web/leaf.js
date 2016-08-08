# Model.changed

Returns a boolean value indicating if the model changed.

----------------------------------------------------------------------

## Usage

leaf.changed

### Returns

`True` if the model changed.

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

				Person.set('firstName', 'Jane');

				console.log(Person.changed); //returns true
			</script>
		</body>
	</html>	