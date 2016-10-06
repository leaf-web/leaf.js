# List.sort

Sort the models in the list.

----------------------------------------------------------------------

## Usage

List.sort(comparer);

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

				People.sort(function(a, b) {
					if(a.get('lastName') < b.get('lastName')) {
						return -1;
					}
					if(a.get('lastName') > b.get('lastName')) {
						return 1;
					}
					return 0;
				});

				console.log(People.template('Hello {{firstName}} {{lastName}}\n'));
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/kkZkWj)
