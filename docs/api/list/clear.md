# List.clear

Removes all the models in the list.

----------------------------------------------------------------------

## Usage

List.clear();

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

				People.clear();

				console.log(People.items);
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/JRpKkZ)
