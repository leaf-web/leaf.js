# Models

Models represent interactive data and their business logic. 

[https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.Model](API Reference)

## Creation

Keys and values can be initally added using the constructor.

	<html>
		<body>
			<script src="leaf.full.js"></script>
			<script>
				var Person = new leaf.Model({
					firstName: 'Jane',
					lastName: 'Smith',
				});
			</script>
		</body>
	</html>

## Serialization

Models can be serialized to JSON to send to restful APIs.

	<html>
		<body>
			<script src="leaf.full.js"></script>
			<script>
				var Person = new leaf.Model({
					firstName: 'Jane',
					lastName: 'Smith',
				});

				console.log(Person.toJSON());
			</script>
		</body>
	</html>

## Observation

Functions can be executed when a key's value changes.

	<html>
		<body>
			<script src="leaf.full.js"></script>
			<script>
				var Person = new leaf.Model({
					firstName: 'Jane',
					lastName: 'Smith',
				});

				Person.on('lastName', function() {
					console.log('This person changed her lastname.');
				});

				Person.set('lastName', 'Doe');
			</script>
		</body>
	</html>

## Templates

Keys inside double-brackets will be replaced with their value. 

	<html>
		<body>
			<script src="leaf.full.js"></script>
			<script>
				var Person = new leaf.Model({
					firstName: 'Jane',
					lastName: 'Smith',
				});

				console.log(
					Person.template('Hello {{firstName}} {{lastName}}.')
				);
			</script>
		</body>
	</html>
