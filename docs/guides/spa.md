# Creating a Single Page Application

## /app.js

The `app.js` file configures the router and calls the Home View when initialized.

	var app = {
	    Router: new leaf.Router(),
	    /**
		 * Initialize
		 */
	    init: function () {
	        app.Router.listen();
	        /**
	         * Default view
	         */
	        if (location.href.indexOf("#") == -1) { app.HomeView.render('main'); }
	    },
	};

## /default.html

The `default.html` file loads all views and components, then calls `app.init()`.

	<html>
		<body>
			<!--#header-->

			<header role="banner">
				<nav>
					<ul>
						<li><a href="#/home">Home</a></li>
						<li><a href="#/logout">Logout</a></li>			
					</ul>
				</nav>
			</header>

			<!--#content-->

			<main role="main"></main>

			<!--#scripts-->

		    <script src="/leaf.js"></script>
        	<script src="/app.js"></script>

			<!--#views-->

	        <script src="Views/Home.js"></script>
            <script src="Views/Help.js"></script>

        	<!--#init-->

        	<script>app.init();</script>
		</body>
	</html>
	
##/views/home.js

The `home.js` script represents the default view. Note that it adds a route definition.

	app.HomeView = new leaf.View({
	    draw: function (el) {
	        leaf.http.include('/views/templates/home.html', 'main', function () {
	            /**
	             * Code inside here executes once home.html is loaded.
	             */	            
	        });

	        return el.innerHTML;
	    }
	});

	/**
	 * Router definition
	 */
	app.Router.add('#/home', function () { app.HomeView.render('main'); });

##/views/Help.js

The `help.js` script represents the Help view. Note that it adds a route definition.

	app.HelpView = new leaf.View({
	    draw: function (el) {
	        leaf.http.include('/views/templates/help.html', 'main', function () {
	            /**
	             * Code inside here executes once help.html is loaded.
	             */	            
	        });

	        return el.innerHTML;
	    }
	});

	/**
	 * Router definition
	 */
	app.Router.add('#/help', function () { app.HelpView.render('main'); });


##/views/templates/home.html

The `home.html` template is called by the Home view.
	
	<h1>Home View</h1>
	<p>
		You are currently seeing the Home view.
	</p>

##/views/templates/home.html

The `help.html` template is called by the Help view.

	<h1>Help View</h1>
	<p>
		You are currently seeing the Help view.
	</p>
	