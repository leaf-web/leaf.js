# leaf.merge

Merge the properties of two objects non-recursively.

----------------------------------------------------------------------

## Usage

leaf.merge(value);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| source          | `Object`      | The source `Object`.             |
| target          | `Object`      | The target `Object`.             |

### Returns

`Object` the `Object`.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var Person = {
					lastName: 'Doe'
				};

				Person = leaf.merge(Person, {
					firstName: 'John'
				});

				console.log(Person.firstName);
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/zKWbjE)
