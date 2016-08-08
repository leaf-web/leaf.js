# leaf.JsonRepeaterControl

Repeat through each model in a JSON file, and replace double-brackets with values.

----------------------------------------------------------------------

## Usage

leaf.JsonRepeaterControl

## Properties

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| url             | `string`      | The URL.                         |
| success         | `Function`    | The success callback             |
| failure         | `Function`    | The failure callback             |
| text            | `string`      | The text to show while loading.  |

----------------------------------------------------------------------

## Example

**index.html**

	<html>	
		<body>
        	<main id="main">
            	<p>{{lastName}}, {{firstName}}</p>
        	</main>

			<script src="scripts/leaf.min.js"></script>
			<script>	
	            leaf.JsonRepeaterControl.render('#main', {
	                    url: 'People.json'
	            });
			</script>
		</body>
	</html>	

**people.json**

	[  
		{  
			"firstName": "John",
			"lastName": "Doe"
		},
		{  
			"firstName": "Jane",
			"lastName": "Mouse"
		}
	]	