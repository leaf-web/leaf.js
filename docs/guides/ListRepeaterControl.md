# ListRepeaterControl

The ListRepeaterControl repeats through every Model in a List, and replaces double-brackets with its values.

## Data

The `data` property specifies the List to use.

    <html>
        <body>
        	<results>
        		<p>{{lastName}}, {{firstName}}</p>
        	</results>

            <script src="scripts/leaf.min.js"></script>
            <script>
                var People = new leaf.List([
					{ lastName: 'Doe', firstName: 'John'},
					{ lastName: 'Doe', firstName: 'Jane'}	               
                ]);
            	
            	leaf.ListRepeaterControl.render('results', {
            			data: People
        		});
            </script>
        </body>
    </html>        