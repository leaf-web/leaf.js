# Model.remove

Remove the specified key from the model.

----------------------------------------------------------------------

## Usage

Model.remove(key);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| key             | `string`      | The key.                         |

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

				Person.remove('firstName');

				console.log(Person.items);
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/KgQzOz)
