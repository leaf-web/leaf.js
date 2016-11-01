# Model.fetch

Fetch a model from the services layer.

----------------------------------------------------------------------

## Usage

Model.fetch(id, [success], [failure])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| id              | `number`      | The ID.                          |
| success         | `Function`    | The success callback.            |
| failure         | `Function`    | The failure callback.            |

----------------------------------------------------------------------

## Example

**index.html**

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var Person = new leaf.Model();

				Person.url = 'api/people';

				Person.fetch(1, function() {
					console.log(Person.get('firstName'));
				});
			</script>
		</body>
	</html>
