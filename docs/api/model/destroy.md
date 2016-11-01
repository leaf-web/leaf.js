# Model.destroy

Destroy a model in the services layer.

----------------------------------------------------------------------

## Usage

Model.destroy(id, [success], [failure])

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

				Person.destroy(1, function() {
					console.log('The model was destroyed.');
				});
			</script>
		</body>
	</html>
