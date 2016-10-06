# List.add

Add a model to the list.

----------------------------------------------------------------------

## Usage

List.add(model)

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| model           | `Object`      | The model.                       |

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

				People.add(new leaf.Model({
					"firstName": "Mike",
					"lastName": "Smith"
				}));

				console.log(People.last().get('firstName'));
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/mAXEKd)
