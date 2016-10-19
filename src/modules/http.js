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
 	 * @since 0.1.0
	 * @param {Object} options The request options.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
	function request(options, success, failure) {
        var xhr = new XMLHttpRequest();
        /**
         * Open
         */
        xhr.open(options.method, options.url, true, options.username, options.password);
        /**
         * Headers
         */
        if (leaf.isDefined(options.headers)) {
        	for(var header in options.headers) {
        		xhr.setRequestHeader(header, options.headers[header]);
        	}
        }
        /**
         * Ready State
         */
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (leaf.isFunction(success)) {
                        success(xhr.responseText);
                    }
                }
	            else {
    	            if (leaf.isFunction(failure)) {
        	            failure(xhr.statusText);
            	    }
            	}
            }
        };

        xhr.send(options.data || null);
	}
	http.request = request;

	/**
	 * Shorthand function to execute a HTTP GET request.
	 * @function get
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {Object} options The request options.
	 */
    function get(url, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'GET',
        	url: url
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.get = get;

	/**
	 * Shorthand function to execute a HTTP DELETE request.
	 * @function del
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {Object} options The request options.
	 */
    function del(url, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'DELETE',
        	url: url
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.del = del;

	/**
	 * Shorthand function to execute a HTTP HEAD request.
	 * @function head
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {Object} options The request options.
	 */
    function head(url, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'HEAD',
        	url: url
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.head = head;

	/**
	 * Shorthand function to execute a HTTP JSONP request.
	 * @function jsonp
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {Object} options The request options.
	 */
    function jsonp(url, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'JSONP',
        	url: url
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.jsonp = jsonp;

	/**
	 * Shorthand function to execute a HTTP POST request.
	 * @function post
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {*} data The data.
	 * @param {Object} options The request options.
	 */
    function post(url, data, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'POST',
        	url: url,
        	data: data
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.post = post;

	/**
	 * Shorthand function to execute a HTTP PUT request.
	 * @function put
	 * @memberOf leaf.http
 	 * @since 1.0.8
	 * @param {string} url The URL.
	 * @param {*} data The data.
	 * @param {Object} options The request options.
	 */
    function put(url, data, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'PUT',
        	url: url,
        	data: data
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.put = put;

	/**
	 * Shorthand function to execute a HTTP PATCH request.
	 * @function patch
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {*} data The data.
	 * @param {Object} options The request options.
	 */
    function patch(url, data, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'PATCH',
        	url: url,
        	data: data
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.patch = patch;

	/**
	 * Shorthand function to execute a HTTP GET request and put the content in an element.
	 * @function include
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {string} selector The selector string.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
    function include(url, selector, success, failure) {
    	var el = document.querySelector(selector);

    	leaf.http.get(url).then(
    		function(data) {
    			el.innerHTML = data;

   				if (leaf.isFunction(success)) {
					success(data);
				}
    		},
   			function(status) {
   				if (leaf.isFunction(failure)) {
					failure(status);
				}
   			}
    	);
    }
    http.include = include;

})(http = leaf.http || (leaf.http = {}));
