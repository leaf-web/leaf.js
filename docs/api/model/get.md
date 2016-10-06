# Model.get

Get the value of the specified key in the model.

----------------------------------------------------------------------

## Usage

Model.get(key);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| key             | `string`      | The key.                         |

### Returns

`*` The value.

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

				console.log(Person.get('firstName')); //returns "John"
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/mAXPoa)
