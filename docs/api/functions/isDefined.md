# leaf.isDefined

Determines if a reference is defined.

----------------------------------------------------------------------

## Usage

leaf.isDefined(value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `*`           | The reference to check.          |

### Returns

`True` if `value` is defined.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var person = 'John Doe';

				console.log(leaf.isDefined(person)); //returns true
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/EgErXv)
