# Model.clear

Remove all the attributes from the model.

----------------------------------------------------------------------

## Usage

Model.clear();

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

				Person.clear();
			</script>
		</body>
	</html>	