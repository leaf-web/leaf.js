# Model.un

Removes the callback `Function` for the specified key. 

----------------------------------------------------------------------

## Usage

Model.un(key);

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				var Person = new leaf.Model({
					"lastName": "Smith",
					"firstName": "Jane"
				});

				Person.on('lastName', function(value) {
					console.log('The lastname is now ' + value + '.');
				});

				Person.un('lastName');
				
				Person.set('lastName', 'Doe'); 				
			</script>
		</body>
	</html>	