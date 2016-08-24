# Model.clone

Return a new instance of the model.

----------------------------------------------------------------------

## Usage

Model.clone();

### Returns

`Object` The model instance.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var Person1 = new leaf.Model({
					"lastName": "Doe",
					"firstName": "John"
				});

				var Person2 = Person1.clone();

				console.log(Person2.get('lastName'));
			</script>
		</body>
	</html>
