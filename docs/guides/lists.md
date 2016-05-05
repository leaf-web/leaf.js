# Lists

Lists represent a collection of Models.

[https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.List](API Reference)

## Creation

Models can be initally added using the constructor.

	<html>
		<body>
			<script src="leaf.full.js"></script>
			<script>
				var People = new leaf.List([
					{ lastName: 'Smith', firstName: 'Jane'},
					{ lastName: 'Smith', firstName: 'Joe'},					
				]);
			</script>
		</body>
	</html>

**From JSON**

You can also create its Models from a JSON file.

	<html>
		<body>
			<script src="leaf.full.js"></script>
			<script>
				var People = new leaf.List();

				People.loadJSON('people.json', function() {

				});
			</script>
		</body>
	</html>

## Enumeration

Models in the List can be enumerated through.

	<html>
		<body>
			<script src="leaf.full.js"></script>
			<script>
				var People = new leaf.List();

				People.loadJSON('people.json', function(list) {
					list.each(function(model) {
						console.log(model.template('lastName'));
					});
				});
			</script>
		</body>
	</html>

## Serialization

Lists can be serialized to JSON to send to restful APIs.

	<html>
		<body>
			<script src="leaf.full.js"></script>
			<script>
				var List = new leaf.List([
					{ lastName: 'Smith', firstName: 'Jane'},
					{ lastName: 'Smith', firstName: 'Joe'},					
				]);

				console.log(List.toJSON());
			</script>
		</body>
	</html>

