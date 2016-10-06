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

				console.log(PersonModel.items);
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/bwLpjP)
