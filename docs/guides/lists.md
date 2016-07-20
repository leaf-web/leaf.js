# Lists

Lists represent a collection of Models.

## Initializing

Lists can be initialized three different ways:

**Empty**

Lists can be initialized without models.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var People = new leaf.List();
            </script>
        </body>
    </html>        

**Array**

Lists can be initialized with models from an `Array`.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var People = new leaf.List([
					{ lastName: 'Doe', firstName: 'John'},
					{ lastName: 'Doe', firstName: 'Jane'}	               
                ]);
            </script>
        </body>
    </html>    

**JSON**

Lists can be initialized with models from a JSON file.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var People = new leaf.List("people.json", 
                    function() {
                        console.log('People.json was loaded.');
                    }
                );
            </script>
        </body>
    </html>

## Sorting

Models inside a List can be sorted based on a condition.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var People = new leaf.List([
					{ lastName: 'Doe', firstName: 'John'},
					{ lastName: 'Doe', firstName: 'Jane'}	       
                ]);
                
                People.sort(function(a, b) {
    				 if(a.get('lastName') < b.get('lastName')) {
    				 	return -1;
    				 }
    				 if(a.get('lastName') > b.get('lastName')) {
    				 	return 1;
    				 }
    				 return 0;                    
                });
                
                console.log(People.template('Hello {{firstName}} \n'));
            </script>
        </body>
    </html>

## Filtering

Models can be removed from a List if a condition is not met.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var People = new leaf.List([
					{ lastName: 'Doe', firstName: 'John'},
					{ lastName: 'Doe', firstName: 'Jane'}	               
                ]);
                
                People.filter(function(model) {
                    return model.get('firstName') == 'Jane';
                });
                
                console.log(People.template('Hello {{firstName}} \n'));
            </script>
        </body>
    </html>    

## Serialization

Lists can be serialized into JSON to send to restful APIs.
 
    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var People = new leaf.List([
					{ lastName: 'Doe', firstName: 'John'},
					{ lastName: 'Doe', firstName: 'Jane'}	               
                ]);
                
                console.log(People.toJSON());
            </script>
        </body>
    </html>

## Templating

Model values will replace double-brackets in a template strings.
 
    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var People = new leaf.List([
					{ lastName: 'Doe', firstName: 'John'},
					{ lastName: 'Doe', firstName: 'Jane'}	               
                ]);
                
                console.log(People.template('Hello {{firstName}} \n'));
            </script>
        </body>
    </html>