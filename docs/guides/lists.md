# Lists

Lists represent a collection of Models.

> See [List](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.List)

## Creation

Models can be initally added using the constructor.

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
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
			<script src="scripts/leaf.min.js"></script>
			<script>
				var People = new leaf.List();

				People.loadJSON('people.json', function() {

				});
			</script>
		</body>
	</html>

> See [List.loadJSON](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.List.loadJSON)

## Enumeration

Models in the List can be enumerated through.

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
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

> See [List.each](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.List.each)

## Serialization

Lists can be serialized to JSON to send to restful APIs.

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var List = new leaf.List([
					{ lastName: 'Smith', firstName: 'Jane'},
					{ lastName: 'Smith', firstName: 'Joe'},					
				]);

				console.log(List.toJSON());
			</script>
		</body>
	</html>

> See [List.toJSON](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.List.toJSON)

