# Models

Models represent interactive data and their business logic. 

See [Model Class](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.Model)

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

See [Model.toJSON()](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.Model.toJSON)

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

See [Model.on](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.Model.on)

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

See [Model.template](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.Model.template)

