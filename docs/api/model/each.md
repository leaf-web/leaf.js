# Model.each

Execute a callback `Function` for each attribute in the model.

----------------------------------------------------------------------

## Usage

Model.each(cb);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| cb              | `Function`    | The callback `Function`.         |

### Notes

The key and the value are passed as parameters to the callback `Function`.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var Person = new leaf.Model({
					"lastName": "Smith",
					"firstName": "Jane"
				});

				Person.each(function(key, value) {
					console.log(key);
				});
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/JRpXxO)
