# JsonRepeaterControl

The JsonRepeaterControl repeats through every Model in a JSON file, and replaces double-brackets with its values.

## Data

The `url` property specifies the URL to the Json file.

    <html>
        <body>
        	<results>
        		<p>{{lastName}}, {{firstName}}</p>
        	</results>

            <script src="scripts/leaf.min.js"></script>
            <script>
            	leaf.JsonRepeaterControl.render('results', {
            			url: 'People.json'
        		});
            </script>
        </body>
    </html>        

## Text

The `text` property specifies the default loading text.

    <html>
        <body>
        	<results>
        		<p>{{lastName}}, {{firstName}}</p>
        	</results>

            <script src="scripts/leaf.min.js"></script>
            <script>
            	leaf.JsonRepeaterControl.render('results', {
            			url: 'People.json',
            			text: '<img src="spinner.gif">'
        		});
            </script>
        </body>
    </html>        

## Success

The `success` property specifies the success callback `Function`.

    <html>
        <body>
        	<results>
        		<p>{{lastName}}, {{firstName}}</p>
        	</results>

            <script src="scripts/leaf.min.js"></script>
            <script>
            	leaf.JsonRepeaterControl.render('results', {
            			url: 'People.json',
            			text: '<img src="spinner.gif">',
            			success: function() {
            				console.log('it worked');
            			}
        		});
            </script>
        </body>
    </html>      

## Failure

The `failure` property specifies the failure callback `Function`.

    <html>
        <body>
        	<results>
        		<p>{{lastName}}, {{firstName}}</p>
        	</results>

            <script src="scripts/leaf.min.js"></script>
            <script>
            	leaf.JsonRepeaterControl.render('results', {
            			url: 'People.json',
            			text: '<img src="spinner.gif">',
            			success: function() {
            				console.log('It worked.');
            			},
            			failure: function() {
            				console.log('It failed.');
            			}            			
        		});
            </script>
        </body>
    </html>    