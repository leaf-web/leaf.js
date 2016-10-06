# Model.count

Return the number of keys in the model.

----------------------------------------------------------------------

## Usage

Model.count();

### Returns

`number` The number of keys.

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

				console.log(Person.count()); //returns 2
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/BLYKvZ)
