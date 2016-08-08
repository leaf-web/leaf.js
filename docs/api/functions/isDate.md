# leaf.isDate

Determines if a reference is a `Date`.

----------------------------------------------------------------------

## Usage

leaf.isDate(value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `*`           | The reference to check.          |

### Returns

`True` if `value` is a `Date`.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				console.log(leaf.isDate(new Date())); //returns true
			</script>
		</body>
	</html>	