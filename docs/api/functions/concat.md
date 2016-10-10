# leaf.concat

Concatenates multiple arguments into a single `string`.

----------------------------------------------------------------------

## Usage

leaf.isString(value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `string[]`    | The arguments.                   |

### Returns

`string` The concatenated arguments.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				console.log(leaf.concat("John", " ", "Doe")); //returns "John Doe"
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/amYrpy)
