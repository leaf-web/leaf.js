# leaf.isObject

Determines if a reference is an `Object`.

----------------------------------------------------------------------

## Usage

leaf.isObject(value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `*`           | The reference to check.          |

### Returns

`True` if `value` is an `Object`.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				console.log(leaf.isObject({})); //returns true
			</script>
		</body>
	</html>	