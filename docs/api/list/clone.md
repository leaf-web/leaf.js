# List.clone

Return a new instance of the list.

----------------------------------------------------------------------

## Usage

List.clone();

### Returns

`Object` The list instance.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var People1 = new leaf.List([
					{ "firstName": "John", "lastName": "Doe" },
					{ "firstName": "Jane", "lastName": "Doe" }
				]);

				var People2 = People1.clone();

				console.log(People2.items[0].get('firstName'));
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/yavJqz)

