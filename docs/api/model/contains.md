# Model.contains

 Determines if the specified key exists in the model.

----------------------------------------------------------------------

## Usage

Model.contains(key);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| key             | `string`      | The key.                         |

### Returns

`boolean` True if the key is found.

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

				console.log(Person.contains('firstName')); //returns true
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/WGrwYZ)
