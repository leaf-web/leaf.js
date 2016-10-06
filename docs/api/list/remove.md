# List.remove

Remove a model from the list at the specified index.

----------------------------------------------------------------------

## Usage

List.remove(index);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| index           | `number`      | The index.                       |

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

				People.remove(0);

				console.log(People.toJSON());
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/zKRBVr)
