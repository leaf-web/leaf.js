# List.get

Get the model at the specified index in the list.

----------------------------------------------------------------------

## Usage

List.get(index);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| index           | `number`      | The index.                       |

### Returns

`Object` The Model.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				var People = new leaf.List([
					{ "firstName": "John", "lastName": "Doe" },
					{ "firstName": "Jane", "lastName": "Doe" }
				]);

				console.log(People.get(0).get('firstName')); //returns John
			</script>
		</body>
	</html>	