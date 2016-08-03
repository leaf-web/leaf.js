<a name="leaf"></a>

## leaf : <code>object</code>
**Kind**: global namespace  

* [leaf](#leaf) : <code>object</code>
    * [.List](#leaf.List)
        * [new List()](#new_leaf.List_new)
        * [.items](#leaf.List.items) : <code>Array</code>
        * [.get(index)](#leaf.List.get) ⇒ <code>Object</code>
        * [.first()](#leaf.List.first) ⇒ <code>Object</code>
        * [.last()](#leaf.List.last) ⇒ <code>Object</code>
        * [.add(model)](#leaf.List.add)
        * [.remove(index)](#leaf.List.remove)
        * [.clear()](#leaf.List.clear)
        * [.fetch(url, [success], [failure])](#leaf.List.fetch)
        * [.merge(items)](#leaf.List.merge)
        * [.each(cb)](#leaf.List.each)
        * [.count()](#leaf.List.count)
        * [.sort(comparer)](#leaf.List.sort)
        * [.filter(comparer)](#leaf.List.filter)
        * [.toJSON()](#leaf.List.toJSON) ⇒ <code>string</code>
        * [.template(text)](#leaf.List.template) ⇒ <code>string</code>
    * [.Model](#leaf.Model)
        * [new Model()](#new_leaf.Model_new)
        * [.items](#leaf.Model.items) : <code>Object</code>
        * [.get(key)](#leaf.Model.get) ⇒ <code>\*</code>
        * [.set(key, value)](#leaf.Model.set)
        * [.remove(key)](#leaf.Model.remove)
        * [.clear()](#leaf.Model.clear)
        * [.on(key, cb)](#leaf.Model.on)
        * [.un(key)](#leaf.Model.un)
        * [.contains(key)](#leaf.Model.contains) ⇒ <code>boolean</code>
        * [.each(cb)](#leaf.Model.each)
        * [.count()](#leaf.Model.count)
        * [.clone()](#leaf.Model.clone) ⇒ <code>Object</code>
        * [.toJSON()](#leaf.Model.toJSON) ⇒ <code>string</code>
        * [.template()](#leaf.Model.template) ⇒ <code>string</code>
    * [.View](#leaf.View)
        * [new View()](#new_leaf.View_new)
        * [.render(selector, data)](#leaf.View.render)
        * [.props()](#leaf.View.props) ⇒ <code>Object</code>
        * [.each(cb)](#leaf.View.each)
    * [.Router](#leaf.Router)
        * [new Router()](#new_leaf.Router_new)
        * [.routes](#leaf.Router.routes) : <code>Object</code>
        * [.add(path, cb)](#leaf.Router.add)
        * [.get(path)](#leaf.Router.get)
        * [.clear(hash)](#leaf.Router.clear)
        * [.clear()](#leaf.Router.clear)
        * [.contains(hash)](#leaf.Router.contains) ⇒ <code>boolean</code>
        * [.each(cb)](#leaf.Router.each)
        * [.listen()](#leaf.Router.listen)
        * [.ignore()](#leaf.Router.ignore)
        * [.call(hash)](#leaf.Router.call)
    * [.JsonModelerControl](#leaf.JsonModelerControl)
        * [new JsonModelerControl()](#new_leaf.JsonModelerControl_new)
    * [.JsonRepeaterControl](#leaf.JsonRepeaterControl)
        * [new JsonRepeaterControl()](#new_leaf.JsonRepeaterControl_new)
    * [.ListRepeaterControl](#leaf.ListRepeaterControl)
        * [new ListRepeaterControl()](#new_leaf.ListRepeaterControl_new)
    * [.http](#leaf.http) : <code>object</code>
        * [.request(options, success, failure)](#leaf.http.request)
        * [.get(url, options)](#leaf.http.get)
        * [.del(url, options)](#leaf.http.del)
        * [.head(url, options)](#leaf.http.head)
        * [.jsonp(url, options)](#leaf.http.jsonp)
        * [.post(url, data, options)](#leaf.http.post)
        * [.patch(url, data, options)](#leaf.http.patch)
        * [.include(url, selector, success, failure)](#leaf.http.include)
    * [.request](#leaf.request) : <code>object</code>
        * [.param(name)](#leaf.request.param) ⇒ <code>string</code>
    * [.isString(value)](#leaf.isString) ⇒ <code>boolean</code>
    * [.isNumber(value)](#leaf.isNumber) ⇒ <code>boolean</code>
    * [.isBoolean(value)](#leaf.isBoolean) ⇒ <code>boolean</code>
    * [.isArray(value)](#leaf.isArray) ⇒ <code>boolean</code>
    * [.isFunction(value)](#leaf.isFunction) ⇒ <code>boolean</code>
    * [.isObject(value)](#leaf.isObject) ⇒ <code>boolean</code>
    * [.isDate(value)](#leaf.isDate) ⇒ <code>boolean</code>
    * [.isDefined(value)](#leaf.isDefined) ⇒ <code>boolean</code>
    * [.isUndefined(value)](#leaf.isUndefined) ⇒ <code>boolean</code>
    * [.isDefined(value)](#leaf.isDefined) ⇒ <code>boolean</code>
    * [.concat(args)](#leaf.concat) ⇒ <code>string</code>
    * [.merge(source, target)](#leaf.merge) ⇒ <code>Object</code>

<a name="leaf.List"></a>

### leaf.List
**Kind**: static class of <code>[leaf](#leaf)</code>  
**Since**: 0.1.0  

* [.List](#leaf.List)
    * [new List()](#new_leaf.List_new)
    * [.items](#leaf.List.items) : <code>Array</code>
    * [.get(index)](#leaf.List.get) ⇒ <code>Object</code>
    * [.first()](#leaf.List.first) ⇒ <code>Object</code>
    * [.last()](#leaf.List.last) ⇒ <code>Object</code>
    * [.add(model)](#leaf.List.add)
    * [.remove(index)](#leaf.List.remove)
    * [.clear()](#leaf.List.clear)
    * [.fetch(url, [success], [failure])](#leaf.List.fetch)
    * [.merge(items)](#leaf.List.merge)
    * [.each(cb)](#leaf.List.each)
    * [.count()](#leaf.List.count)
    * [.sort(comparer)](#leaf.List.sort)
    * [.filter(comparer)](#leaf.List.filter)
    * [.toJSON()](#leaf.List.toJSON) ⇒ <code>string</code>
    * [.template(text)](#leaf.List.template) ⇒ <code>string</code>

<a name="new_leaf.List_new"></a>

#### new List()
Represents a collection of Models.

<a name="leaf.List.items"></a>

#### List.items : <code>Array</code>
The Models collection.

**Kind**: static property of <code>[List](#leaf.List)</code>  
**Since**: 0.1.0  
<a name="leaf.List.get"></a>

#### List.get(index) ⇒ <code>Object</code>
Get the Model at the specified index in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>Object</code> - The Model.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index. |

<a name="leaf.List.first"></a>

#### List.first() ⇒ <code>Object</code>
Get the first Model in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>Object</code> - The Model.  
**Since**: 0.1.0  
<a name="leaf.List.last"></a>

#### List.last() ⇒ <code>Object</code>
Get the last Model in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>Object</code> - The Model.  
**Since**: 0.1.0  
<a name="leaf.List.add"></a>

#### List.add(model)
Add a Model to the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>Object</code> | The Model. |

<a name="leaf.List.remove"></a>

#### List.remove(index)
Remove a Model from the List at the specified index.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the Model. |

<a name="leaf.List.clear"></a>

#### List.clear()
Removes all the Models in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 0.1.0  
<a name="leaf.List.fetch"></a>

#### List.fetch(url, [success], [failure])
Merge the Models with Models from a flat JSON file.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| [success] | <code>function</code> | The success callback. |
| [failure] | <code>function</code> | The failure callback. |

<a name="leaf.List.merge"></a>

#### List.merge(items)
Merge the Models from an Array with this one.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;Object&gt;</code> | The Models to merge. |

<a name="leaf.List.each"></a>

#### List.each(cb)
Execute a callback Function for each Model in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.List.count"></a>

#### List.count()
Return the number of Model in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 1.0.0  
<a name="leaf.List.sort"></a>

#### List.sort(comparer)
Sort the Models in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| comparer | <code>function</code> | The comparer Function. |

<a name="leaf.List.filter"></a>

#### List.filter(comparer)
Remove Models that meet a condition.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| comparer | <code>function</code> | The comparer Function. |

<a name="leaf.List.toJSON"></a>

#### List.toJSON() ⇒ <code>string</code>
Serialize the List to JSON format.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>string</code> - A JSON string.  
**Since**: 0.1.0  
<a name="leaf.List.template"></a>

#### List.template(text) ⇒ <code>string</code>
Return a List template with double-brackets replaced with values.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>string</code> - The target string.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The source string. |

<a name="leaf.Model"></a>

### leaf.Model
**Kind**: static class of <code>[leaf](#leaf)</code>  
**Since**: 0.1.0  

* [.Model](#leaf.Model)
    * [new Model()](#new_leaf.Model_new)
    * [.items](#leaf.Model.items) : <code>Object</code>
    * [.get(key)](#leaf.Model.get) ⇒ <code>\*</code>
    * [.set(key, value)](#leaf.Model.set)
    * [.remove(key)](#leaf.Model.remove)
    * [.clear()](#leaf.Model.clear)
    * [.on(key, cb)](#leaf.Model.on)
    * [.un(key)](#leaf.Model.un)
    * [.contains(key)](#leaf.Model.contains) ⇒ <code>boolean</code>
    * [.each(cb)](#leaf.Model.each)
    * [.count()](#leaf.Model.count)
    * [.clone()](#leaf.Model.clone) ⇒ <code>Object</code>
    * [.toJSON()](#leaf.Model.toJSON) ⇒ <code>string</code>
    * [.template()](#leaf.Model.template) ⇒ <code>string</code>

<a name="new_leaf.Model_new"></a>

#### new Model()
Represents a Model.

<a name="leaf.Model.items"></a>

#### Model.items : <code>Object</code>
The items collection. Do not modify directly.

**Kind**: static property of <code>[Model](#leaf.Model)</code>  
**Since**: 0.1.0  
<a name="leaf.Model.get"></a>

#### Model.get(key) ⇒ <code>\*</code>
Get the value of the specified key in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>\*</code> - The value.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |

<a name="leaf.Model.set"></a>

#### Model.set(key, value)
Set the value of the specified key in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |
| value | <code>\*</code> | The value. |

<a name="leaf.Model.remove"></a>

#### Model.remove(key)
Remove the specified key from the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |

<a name="leaf.Model.clear"></a>

#### Model.clear()
Remove all the keys from the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Since**: 1.0.0  
<a name="leaf.Model.on"></a>

#### Model.on(key, cb)
Sets a callback Function for the specified key.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.Model.un"></a>

#### Model.un(key)
Removes the specified key's callback function.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |

<a name="leaf.Model.contains"></a>

#### Model.contains(key) ⇒ <code>boolean</code>
Determines if the specified key exists in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>boolean</code> - True if the key is found.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |

<a name="leaf.Model.each"></a>

#### Model.each(cb)
Execute a callback Function for each key in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.Model.count"></a>

#### Model.count()
Return the number of keys in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Since**: 1.0.0  
<a name="leaf.Model.clone"></a>

#### Model.clone() ⇒ <code>Object</code>
Return a new instance of this Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>Object</code> - The new Model.  
**Since**: 1.0.0  
<a name="leaf.Model.toJSON"></a>

#### Model.toJSON() ⇒ <code>string</code>
Returns the Model as a JSON string.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>string</code> - A JSON string.  
**Since**: 0.1.0  
<a name="leaf.Model.template"></a>

#### Model.template() ⇒ <code>string</code>
Returns the specified string with handle bars swapped for Model values.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>string</code> - The string containing the handlebars.  
**Since**: 0.1.0  
<a name="leaf.View"></a>

### leaf.View
**Kind**: static class of <code>[leaf](#leaf)</code>  
**Since**: 0.1.0  

* [.View](#leaf.View)
    * [new View()](#new_leaf.View_new)
    * [.render(selector, data)](#leaf.View.render)
    * [.props()](#leaf.View.props) ⇒ <code>Object</code>
    * [.each(cb)](#leaf.View.each)

<a name="new_leaf.View_new"></a>

#### new View()
Represents a view, component, or HTML fragment.

<a name="leaf.View.render"></a>

#### View.render(selector, data)
Render the view on the webpage.

**Kind**: static method of <code>[View](#leaf.View)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | The selector. |
| data | <code>Object</code> | The data option. |

<a name="leaf.View.props"></a>

#### View.props() ⇒ <code>Object</code>
Returns the options.data option.

**Kind**: static method of <code>[View](#leaf.View)</code>  
**Returns**: <code>Object</code> - The data option.  
**Since**: 0.1.0  
<a name="leaf.View.each"></a>

#### View.each(cb)
Execute a callback for each match in the selector.

**Kind**: static method of <code>[View](#leaf.View)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback function. |

<a name="leaf.Router"></a>

### leaf.Router
**Kind**: static class of <code>[leaf](#leaf)</code>  
**Since**: 0.1.0  

* [.Router](#leaf.Router)
    * [new Router()](#new_leaf.Router_new)
    * [.routes](#leaf.Router.routes) : <code>Object</code>
    * [.add(path, cb)](#leaf.Router.add)
    * [.get(path)](#leaf.Router.get)
    * [.clear(hash)](#leaf.Router.clear)
    * [.clear()](#leaf.Router.clear)
    * [.contains(hash)](#leaf.Router.contains) ⇒ <code>boolean</code>
    * [.each(cb)](#leaf.Router.each)
    * [.listen()](#leaf.Router.listen)
    * [.ignore()](#leaf.Router.ignore)
    * [.call(hash)](#leaf.Router.call)

<a name="new_leaf.Router_new"></a>

#### new Router()
Represents a collection of routes

<a name="leaf.Router.routes"></a>

#### Router.routes : <code>Object</code>
The routes collection.

**Kind**: static property of <code>[Router](#leaf.Router)</code>  
**Since**: 0.1.0  
<a name="leaf.Router.add"></a>

#### Router.add(path, cb)
Adds a route to the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The path. |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.Router.get"></a>

#### Router.get(path)
Get the callback Function of a route in the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The path. |

<a name="leaf.Router.clear"></a>

#### Router.clear(hash)
Remove a route from the Router by its hash.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash. |

<a name="leaf.Router.clear"></a>

#### Router.clear()
Removes all the routes in the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Since**: 0.1.0  
<a name="leaf.Router.contains"></a>

#### Router.contains(hash) ⇒ <code>boolean</code>
Determine if the specified hash exists in the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Returns**: <code>boolean</code> - True if the hash exists.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash. |

<a name="leaf.Router.each"></a>

#### Router.each(cb)
Execute a callback Function for each route in the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.Router.listen"></a>

#### Router.listen()
Begin listening for hash changes to invoke routes.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Since**: 0.1.0  
<a name="leaf.Router.ignore"></a>

#### Router.ignore()
Stop listening for hash changes.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Since**: 0.1.0  
<a name="leaf.Router.call"></a>

#### Router.call(hash)
Execute a route's callback Function on a match.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash. |

<a name="leaf.JsonModelerControl"></a>

### leaf.JsonModelerControl
**Kind**: static class of <code>[leaf](#leaf)</code>  
<a name="new_leaf.JsonModelerControl_new"></a>

#### new JsonModelerControl()
Control to return a template from a single Model.

<a name="leaf.JsonRepeaterControl"></a>

### leaf.JsonRepeaterControl
**Kind**: static class of <code>[leaf](#leaf)</code>  
<a name="new_leaf.JsonRepeaterControl_new"></a>

#### new JsonRepeaterControl()
Control to return a template from a JSON file.

<a name="leaf.ListRepeaterControl"></a>

### leaf.ListRepeaterControl
**Kind**: static class of <code>[leaf](#leaf)</code>  
**Since**: 0.1.0  
<a name="new_leaf.ListRepeaterControl_new"></a>

#### new ListRepeaterControl()
Control to return a template from a List.

<a name="leaf.http"></a>

### leaf.http : <code>object</code>
**Kind**: static namespace of <code>[leaf](#leaf)</code>  

* [.http](#leaf.http) : <code>object</code>
    * [.request(options, success, failure)](#leaf.http.request)
    * [.get(url, options)](#leaf.http.get)
    * [.del(url, options)](#leaf.http.del)
    * [.head(url, options)](#leaf.http.head)
    * [.jsonp(url, options)](#leaf.http.jsonp)
    * [.post(url, data, options)](#leaf.http.post)
    * [.patch(url, data, options)](#leaf.http.patch)
    * [.include(url, selector, success, failure)](#leaf.http.include)

<a name="leaf.http.request"></a>

#### http.request(options, success, failure)
Executes a HTTP request.

**Kind**: static method of <code>[http](#leaf.http)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The request options. |
| success | <code>function</code> | The success Function. |
| failure | <code>function</code> | The failure Function. |

<a name="leaf.http.get"></a>

#### http.get(url, options)
Shorthand function to execute a HTTP GET request.

**Kind**: static method of <code>[http](#leaf.http)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| options | <code>Object</code> | The request options. |

<a name="leaf.http.del"></a>

#### http.del(url, options)
Shorthand function to execute a HTTP DELETE request.

**Kind**: static method of <code>[http](#leaf.http)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| options | <code>Object</code> | The request options. |

<a name="leaf.http.head"></a>

#### http.head(url, options)
Shorthand function to execute a HTTP HEAD request.

**Kind**: static method of <code>[http](#leaf.http)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| options | <code>Object</code> | The request options. |

<a name="leaf.http.jsonp"></a>

#### http.jsonp(url, options)
Shorthand function to execute a HTTP JSONP request.

**Kind**: static method of <code>[http](#leaf.http)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| options | <code>Object</code> | The request options. |

<a name="leaf.http.post"></a>

#### http.post(url, data, options)
Shorthand function to execute a HTTP POST request.

**Kind**: static method of <code>[http](#leaf.http)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| data | <code>\*</code> | The data. |
| options | <code>Object</code> | The request options. |

<a name="leaf.http.patch"></a>

#### http.patch(url, data, options)
Shorthand function to execute a HTTP PATCH request.

**Kind**: static method of <code>[http](#leaf.http)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| data | <code>\*</code> | The data. |
| options | <code>Object</code> | The request options. |

<a name="leaf.http.include"></a>

#### http.include(url, selector, success, failure)
Shorthand function to execute a HTTP GET request and put the content in an element.

**Kind**: static method of <code>[http](#leaf.http)</code>  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| selector | <code>string</code> | The selector string. |
| success | <code>function</code> | The success Function. |
| failure | <code>function</code> | The failure Function. |

<a name="leaf.request"></a>

### leaf.request : <code>object</code>
**Kind**: static namespace of <code>[leaf](#leaf)</code>  
<a name="leaf.request.param"></a>

#### request.param(name) ⇒ <code>string</code>
Return a value from the querystring.

**Kind**: static method of <code>[request](#leaf.request)</code>  
**Returns**: <code>string</code> - The value.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name. |

<a name="leaf.isString"></a>

### leaf.isString(value) ⇒ <code>boolean</code>
Determines if a reference is a string.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a string.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isNumber"></a>

### leaf.isNumber(value) ⇒ <code>boolean</code>
Determines if a reference is a number.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a number.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isBoolean"></a>

### leaf.isBoolean(value) ⇒ <code>boolean</code>
Determines if a reference is a boolean.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a boolean.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isArray"></a>

### leaf.isArray(value) ⇒ <code>boolean</code>
Determines if a reference is an Array.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is an Array.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isFunction"></a>

### leaf.isFunction(value) ⇒ <code>boolean</code>
Determines if a reference is a Function.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a Function.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isObject"></a>

### leaf.isObject(value) ⇒ <code>boolean</code>
Determines if a reference is an Object.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is an Object.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isDate"></a>

### leaf.isDate(value) ⇒ <code>boolean</code>
Determines if a reference is a Date.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a Date.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isDefined"></a>

### leaf.isDefined(value) ⇒ <code>boolean</code>
Determines if a reference is defined.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is defined.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isUndefined"></a>

### leaf.isUndefined(value) ⇒ <code>boolean</code>
Determines if a reference is undefined.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is undefined.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isDefined"></a>

### leaf.isDefined(value) ⇒ <code>boolean</code>
Determines if a reference is null.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is null.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.concat"></a>

### leaf.concat(args) ⇒ <code>string</code>
Concatenates multiple string arguments into a single string.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>string</code> - The concatenated string.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Array.&lt;string&gt;</code> | The arguments to concatenate. |

<a name="leaf.merge"></a>

### leaf.merge(source, target) ⇒ <code>Object</code>
Does a simple, non-recursive, merge of two Objects.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>Object</code> - The Object.  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Object</code> | The source Object. |
| target | <code>Object</code> | The target Object. |

