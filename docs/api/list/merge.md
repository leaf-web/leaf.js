# List.merge

Merge models from an `Array`.

----------------------------------------------------------------------

## Usage

List.merge(items[])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| items           | `Array`       | The model `Array`.               |

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var People = new leaf.List();

				People.merge([
					{ "firstName": "John", "lastName": "Doe" },
					{ "firstName": "Jane", "lastName": "Doe" }
				]);

				console.log(People.get(0).get('firstName')); //returns John
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/ALVXkg)
