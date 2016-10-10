# View.render

Render the view on the webpage.

----------------------------------------------------------------------

## Usage

View.render(selector, [props])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| selector        | `string`      | The selector.                    |
| props           | `Object`      | The properties.                  |

----------------------------------------------------------------------

## Example

    <html>
        <body>
        	<main id="main"></main>

            <script src="scripts/leaf.min.js"></script>
            <script>
                var Person = new leaf.View({
                	draw: function(el) {
                		return '<p>Hello World</p>';
                	}
            	});

            	Person.render('#main');
            </script>
        </body>
    </html>

[View in CodePen](https://codepen.io/leaf-git/pen/EgErGQ)
