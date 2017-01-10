# List.find

Returns a model from a list where a condition is met.

----------------------------------------------------------------------

## Usage

List.find(comparer);

----------------------------------------------------------------------

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| comparer        | `function`    | The comparer `function`.         |

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

				var Person = People.find(function(model) {
					return model.get('firstName') == 'Jane';
				});

				console.log(Person.template('Hello {{firstName}} {{lastName}}\n'));
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/amqkRR)
