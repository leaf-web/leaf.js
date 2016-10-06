# Constructor

The constructor function.

----------------------------------------------------------------------

## Usage

new leaf.Model([items])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| items           | `Object`      | The initial items to be added.   |

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var Person = new leaf.Model({
					"lastName": "Doe",
					"firstName": "John"
				});

				console.log(Person.get('firstName'));
			</script>
		</body>
	</html>

[View in CodePen](http://codepen.io/leaf-git/pen/ZpAWAW)
