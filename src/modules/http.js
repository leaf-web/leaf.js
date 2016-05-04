/* 
   #http
   ========================================================================== */

/**
 * @namespace http
 * @memberOf leaf
 */
var http;

(function (http) {

	/**
	 * Executes a HTTP request.
	 * @function request
	 * @memberOf leaf.http
	 * @param {Object} options The request options.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
	function request(options, success, failure) {
        var xhr = new XMLHttpRequest();

        xhr.open(options.method, options.url, true, options.username, options.password);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (leaf.isFunction(success)) {
                        success(xhr.responseText);
                    }
                }
            }
            else {
                if (leaf.isFunction(failure)) {
                    failure(xhr.statusText);
                }
            }
        };

        xhr.send(options.data);
	}

	http.request = request;

	/**
	 * Shorthand function to execute a HTTP GET request.	 
	 * @function get
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 */
    function get(url) {
        var options = { method: 'GET', url: url };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.get = get;

	/**
	 * Shorthand function to execute a HTTP DELETE request.
	 * @function del
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 */
    function del(url) {
        var options = { method: 'DELETE', url: url };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.del = del;

	/**
	 * Shorthand function to execute a HTTP HEAD request.
	 * @function head
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 */
    function head(url) {
        var options = { method: 'HEAD', url: url };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.head = head;

	/**
	 * Shorthand function to execute a HTTP JSONP request.
	 * @function jsonp
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 */
    function jsonp(url) {
        var options = { method: 'JSONP', url: url };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.jsonp = jsonp;

	/**
	 * Shorthand function to execute a HTTP POST request.
	 * @function post
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 * @param {*} data The data.	  
	 */
    function post(url, data) {
        var options = { method: 'POST', url: url, data: data };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.post = post;

	/**
	 * Shorthand function to execute a HTTP PATCH request.
	 * @function patch
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 * @param {*} data The data.
	 */
    function patch(url, data) {
        var options = { method: 'PATCH', url: url, data: data };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.patch = patch;

	/**
	 * Shorthand function to execute a HTTP GET request and put the content in an element.
	 * @function include
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 * @param {string} selector The selector string.
	 */
    function include(url, selector) {
    	var el = document.querySelector(selector);

    	leaf.http.get(url).then(function(data) {
    		el.innerHTML = data;
    		
			if (leaf.isFunction(success)) {
				success();
			} 
    	}, function() {
			if (leaf.isFunction(failure)) {
				failure();
			} 
    	});
    }
    http.include = include;

})(http = leaf.http || (leaf.http = {}));