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
				var PersonModel = new leaf.Model({
					"lastName": "Doe",
					"firstName": "John"
				});

				PersonModel.clear();
			</script>
		</body>
	</html>	