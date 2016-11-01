# Model.update

Update a model in the services layer.

----------------------------------------------------------------------

## Usage

Model.update(id, [success], [failure])

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
					Person.set('lastName', 'Doe');

					Person.update(1, function() {
						console.log('The model was updated.');
					});
				});
			</script>
		</body>
	</html>
