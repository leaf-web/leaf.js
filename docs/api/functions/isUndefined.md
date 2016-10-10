# leaf.isUndefined

Determines if a reference is undefined.

----------------------------------------------------------------------

## Usage

leaf.isUndefined(value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `*`           | The reference to check.          |

### Returns

`True` if `value` is undefined.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var person;

				console.log(leaf.isUndefined(person)); //returns true
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/jrzJzW)
