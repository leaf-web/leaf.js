# Model.merge

Merge attributes from an `Object`.

----------------------------------------------------------------------

## Usage

Model.merge(items[])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| items           | `Object`      | The attributes `Object`.         |

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

   				Person.merge({
        			"middleName": "James"
        		});

				console.log(Person.toJSON());
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/gwvAyE)


