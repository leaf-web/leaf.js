# Model.set

Set the value of the specified key in the model.

----------------------------------------------------------------------

## Usage

Model.set(key, value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| key             | `string`      | The key.                         |
| value           | `*`           | The value.                       |

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

				Person.set('firstName', 'Jane');

				console.log(Person.get('firstName')); //returns "Jane"
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/GjQkVZ)
