# List.template

Returns the specified string with handle bars swapped for model values.

----------------------------------------------------------------------

## Usage

Model.template(string);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| text            | `string`      | The template `string`.           |

### Notes

`List.template` will iterate through each model in the collection.

### Returns

`string` The output.

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

				console.log(People.template('Hello {{firstName}} {{lastName}}\n'));
			</script>
		</body>
	</html>	
