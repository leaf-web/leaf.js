# leaf.ListRepeaterControl

Repeat through each model in a List, and replace double-brackets with values.

----------------------------------------------------------------------

## Usage

leaf.ListRepeaterControl

## Properties

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| data            | `Array`       | The list.                        |

----------------------------------------------------------------------

## Example

	<html>
		<body>
        	<main id="main">
            	<p>{{lastName}}, {{firstName}}</p>
        	</main>

			<script src="scripts/leaf.min.js"></script>
			<script>
                var People = new leaf.List([
					{ lastName: 'Doe', firstName: 'John'},
					{ lastName: 'Doe', firstName: 'Jane'}
                ]);

            	leaf.ListRepeaterControl.render('#main', {
            			data: People
        		});
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/dpmLPA)
