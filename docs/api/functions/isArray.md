# leaf.isArray

Determines if a reference is an `Array`.

----------------------------------------------------------------------

## Usage

leaf.isArray(value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `*`           | The reference to check.          |

### Returns

`True` if `value` is an `Array`.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				console.log(leaf.isArray([1,2,3])); //returns true
			</script>
		</body>
	</html>	