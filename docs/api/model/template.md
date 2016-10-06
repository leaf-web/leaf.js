# Model.template

Returns the specified string with handle bars swapped for model values.

----------------------------------------------------------------------

## Usage

Model.template(string);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| text            | `string`      | The template string.             |

### Returns

`string` The output.

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

				console.log(Person.template('Hello {{firstName}} {{lastName}}'));
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/XjkKWa)
