# leaf.queryString

Return the value of a queryString parameter.

----------------------------------------------------------------------

## Usage

leaf.queryString(name);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| name            | `string`      | The name.                        |

### Returns

`string` the value.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				console.log(leaf.queryString('id'));
			</script>
		</body>
	</html>	