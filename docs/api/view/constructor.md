# View constructor

The constructor function.

----------------------------------------------------------------------

## Usage

new leaf.View(options)

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| options         | `Object`      | The options.                     |

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| draw            | `Function`    | The function called to render.   |

### Notes

The HTMLElement is passed as a parameter to the `draw` option.

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
