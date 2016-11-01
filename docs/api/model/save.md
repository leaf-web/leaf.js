# Model.save

Save a new model in the services layer.

----------------------------------------------------------------------

## Usage

Model.save([success], [failure])

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
				var Person = new leaf.Model({
					lastName: 'Doe'
					firstName: 'John'
				});

				Person.url = 'api/people';

				Person.save(function() {
					console.log('The model was saved.');
				});
			</script>
		</body>
	</html>
