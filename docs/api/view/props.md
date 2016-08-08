# View.props

Returns a property in the props collection.

----------------------------------------------------------------------

## Usage

View.props

----------------------------------------------------------------------

## Example

    <html>
        <body>
        	<main id="main"></main>

            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.View({
                	draw: function(el) {
                		return '<p>Hello ' + this.props.name + '</p>';
                	}	
            	});

            	Person.render('#main', {
            		name: 'Jane Doe'
        		});
            </script>
        </body>
    </html>    