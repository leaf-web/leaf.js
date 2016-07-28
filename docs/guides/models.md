# Models

Models represent data that can be observed for changes.

## Initializing

Models can be initialized two different ways:

**Empty**

Models can be initialized without key-values.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.Model();
            </script>
        </body>
    </html>       

**Object**

Models can be initialized from an `Object`.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.Model({
                	firstName: 'John',
                	lastName: 'Doe'	
            	});
            </script>
        </body>
    </html>           

## Observation

Models can execute callbacks when a value changes.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.Model({
                	firstName: 'Jane',
                	lastName: 'Smith'	
            	});
            	
            	Person.on('lastName', function() {
            	    console.log('The lastname was changed.');
            	});
            	
            	Person.set('lastName', 'Doe');
            </script>
        </body>
    </html>   

## Serialization

Models can be serialized into JSON to send to restful APIs.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.Model({
                	firstName: 'John',
                	lastName: 'Doe'	
            	});
            	
            	console.log(Person.toJSON());
            </script>
        </body>
    </html>   

## Templating

Model values will replace double-brackets in a template string.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.Model({
                	firstName: 'John',
                	lastName: 'Doe'	
            	});
            	
            	console.log(Person.template('Hello {{firstName}}'));
            </script>
        </body>
    </html>       