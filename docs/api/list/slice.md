# List.slice

Reduce the models to a specific portion.

----------------------------------------------------------------------

## Usage

List.slice();

### Params

| Param           | Type          | Details                                 |
| --------------- | ------------- | --------------------------------------- |
| begin           | `number`      | The index at which to begin extraction. |
| end             | `number`      | The index at which to end extraction.   |

### Returns

`Object` The model.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var People = new leaf.List([
					{ "firstName": "John", "lastName": "Doe" },
					{ "firstName": "Jane", "lastName": "Doe" },
					{ "firstName": "Mary", "lastName": "Doe" },
					{ "firstName": "Jack", "lastName": "Doe" },
				]);

				People.slice(0, 2);

				People.each(function(model) {
					console.log(model.get('firstName'));
				});
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/wzyWVJ)
