# List.fetch

Merge models from a JSON file.

----------------------------------------------------------------------

## Usage

List.fetch(url, [success], [failure])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| url             | `string`      | The URL.                         |
| success         | `Function`    | The success callback.            |
| failure         | `Function`    | The failure callback.            |

### Notes

The list is passed as a parameter to the success callback `Function`.

----------------------------------------------------------------------

## Example

**index.html**

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				var People = new leaf.List();

				People.fetch('people.json', function(list) {
					console.log(list.first().get('firstName')); //returns John
				});
			</script>
		</body>
	</html>	

**people.json**

	[  
		{  
			"firstName": "John",
			"lastName": "Doe"
		},
		{  
			"firstName": "Jane",
			"lastName": "Mouse"
		}
	]