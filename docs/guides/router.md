# Router

A Router represents code that is executed when a url hash is changed.

## Basic Routing

Routes can be added by providing a url hash and callback `Function`.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Router = new leaf.Router();

                Router.add('#/home', function() {
                	console.log('You clicked the Home link.');
            	});

            	Router.listen();
            </script>
        </body>
    </html>              

## Parameters

Routes can have parameters that are available to the callback `Function`.

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
                var Router = new leaf.Router();

                Router.add('#/store/:product', function(param) {
                	console.log('You are looking for' + param.product);
            	});

            	Router.listen();
            </script>
        </body>
    </html>              
