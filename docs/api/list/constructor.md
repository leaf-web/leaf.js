# Constructor

The constructor function.

----------------------------------------------------------------------

## Usage

new leaf.List([items], [success], [failure])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| items           | `string`      | The JSON url.                    |
| items           | `Array`       | The `Model` array.               |
| success         | `Function`    | The success callback.            |
| failure         | `Function`    | The failure callback.            |

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

				console.log(People.get(0).get('firstName')); //returns "John"
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/LRQkBa)
