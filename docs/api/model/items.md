# Model.items

They key-value collection. Do not modify this directly.

----------------------------------------------------------------------

## Usage

Model.items;

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

				console.log(Person.items.lastName); //returns "Doe"
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/ZpAWkL)
