# Views

Views represent a view, component, or HTML fragment.

## Initializing

Views can be initialized by passing an object that contains a draw `Function`.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.View({
                	draw: function(el) {

                	}	
            	});
            </script>
        </body>
    </html>       

## Drawing

The draw `Function` replaces the innerHTML property with its return value.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.View({
                	draw: function(el) {
                		return '<p>Hello World</p>';
                	}	
            	});
            </script>
        </body>
    </html>  

## Rendering

The render `Function` renders the view inside elements by a selector string.

    <html>
        <body>
        	<hello></hello>

            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.View({
                	draw: function(el) {
                		return '<p>Hello World</p>';
                	}	
            	});

            	Person.render('hello');
            </script>
        </body>
    </html>          

## Properties

The render `Function` accepts an optional `Object` argument for properties.

    <html>
        <body>
        	<hello></hello>

            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.View({
                	draw: function(el) {
                		return '<p>Hello ' + this.props.name + '</p>';
                	}	
            	});

            	Person.render('hello', {
            		name: 'Jane Doe'
        		});
            </script>
        </body>
    </html>             