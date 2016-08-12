# leaf.JsonModelerControl

Return a template from a single model in a JSON file. 

----------------------------------------------------------------------

## Usage

leaf.JsonModelerControl

## Properties

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| url             | `string`      | The URL.                         |
| success         | `Function`    | The success callback             |
| failure         | `Function`    | The failure callback             |
| text            | `string`      | The text to show while loading.  |

## Notes

Your Web API must return a JSON file containing one model.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
        	<main id="main">
            	<p>{{lastName}}, {{firstName}}</p>
        	</main>

			<script src="scripts/leaf.min.js"></script>
			<script>	
	            leaf.JsonModelerControl.render('#main', {
	                    url: '/api/employees?id=1'
	            });
			</script>
		</body>
	</html>	
