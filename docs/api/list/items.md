# List.items

The model Array.

----------------------------------------------------------------------

## Usage

List.items

### Returns

`Array` The model Array.

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

				console.log(People.items[0].get('firstName'));
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/NRyAmj)
