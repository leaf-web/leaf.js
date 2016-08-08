# leaf.isFunction

Determines if a reference is a `function`.

----------------------------------------------------------------------

## Usage

leaf.isFunction(value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `*`           | The reference to check.          |

### Returns

`True` if `value` is a `function`.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				console.log(leaf.isFunction(function() {})); //returns true
			</script>
		</body>
	</html>	