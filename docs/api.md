<a name="leaf"></a>

## leaf : <code>object</code>
**Kind**: global namespace  

* [leaf](#leaf) : <code>object</code>
    * [.List](#leaf.List)
        * [new List()](#new_leaf.List_new)
        * [.get(index)](#leaf.List.get) ⇒ <code>Object</code>
        * [.add(model)](#leaf.List.add)
        * [.remove(index)](#leaf.List.remove)
        * [.each(cb)](#leaf.List.each)
        * [.count()](#leaf.List.count) ⇒ <code>number</code>
        * [.sort(comparer)](#leaf.List.sort)
        * [.reset()](#leaf.List.reset)
        * [.toJSON()](#leaf.List.toJSON) ⇒ <code>string</code>
        * [.loadData(items, [merge])](#leaf.List.loadData)
        * [.loadJSON(url, [success], [failure], [merge])](#leaf.List.loadJSON)
        * [.template(text)](#leaf.List.template) ⇒ <code>string</code>
    * [.Model](#leaf.Model)
        * [new Model()](#new_leaf.Model_new)
        * [.items](#leaf.Model.items) : <code>Object</code>
        * [.get(key)](#leaf.Model.get) ⇒ <code>\*</code>
        * [.set(key, value)](#leaf.Model.set)
        * [.delete(key)](#leaf.Model.delete)
        * [.contains(key)](#leaf.Model.contains) ⇒ <code>boolean</code>
        * [.on(key, cb)](#leaf.Model.on)
        * [.each(cb)](#leaf.Model.each)
        * [.toJSON()](#leaf.Model.toJSON) ⇒ <code>string</code>
        * [.template(text)](#leaf.Model.template) ⇒ <code>string</code>
    * [.View](#leaf.View)
        * [new View()](#new_leaf.View_new)
        * [.render([props])](#leaf.View.render)
        * [.each(cb)](#leaf.View.each)
    * [.Router](#leaf.Router)
        * [new Router()](#new_leaf.Router_new)
        * [.add(hash, cb)](#leaf.Router.add)
        * [.get(hash)](#leaf.Router.get) ⇒ <code>function</code>
        * [.remove(hash)](#leaf.Router.remove)
        * [.contains(hash)](#leaf.Router.contains) ⇒ <code>boolean</code>
        * [.invoke([hash])](#leaf.Router.invoke)
        * [.listen([hash])](#leaf.Router.listen)
        * [.ignore()](#leaf.Router.ignore)
    * [.RepeatView](#leaf.RepeatView)
        * [new RepeatView()](#new_leaf.RepeatView_new)
    * [.http](#leaf.http) : <code>object</code>
        * [.request(options, success, failure)](#leaf.http.request)
        * [.get(url)](#leaf.http.get)
        * [.del(url)](#leaf.http.del)
        * [.head(url)](#leaf.http.head)
        * [.jsonp(url)](#leaf.http.jsonp)
        * [.post(url, data)](#leaf.http.post)
        * [.patch(url, data)](#leaf.http.patch)
        * [.include(url, selector, success, failure)](#leaf.http.include)
    * [.isString(value)](#leaf.isString) ⇒ <code>boolean</code>
    * [.isNumber(value)](#leaf.isNumber) ⇒ <code>boolean</code>
    * [.isBoolean(value)](#leaf.isBoolean) ⇒ <code>boolean</code>
    * [.isArray(value)](#leaf.isArray) ⇒ <code>boolean</code>
    * [.isFunction(value)](#leaf.isFunction) ⇒ <code>boolean</code>
    * [.isObject(value)](#leaf.isObject) ⇒ <code>boolean</code>
    * [.isDate(value)](#leaf.isDate) ⇒ <code>boolean</code>
    * [.isDefined(value)](#leaf.isDefined) ⇒ <code>boolean</code>
    * [.isUndefined(value)](#leaf.isUndefined) ⇒ <code>boolean</code>
    * [.concat(args)](#leaf.concat) ⇒ <code>string</code>
    * [.queryString(name))](#leaf.queryString) ⇒ <code>string</code>

<a name="leaf.List"></a>

### leaf.List
**Kind**: static class of <code>[leaf](#leaf)</code>  

* [.List](#leaf.List)
    * [new List()](#new_leaf.List_new)
    * [.get(index)](#leaf.List.get) ⇒ <code>Object</code>
    * [.add(model)](#leaf.List.add)
    * [.remove(index)](#leaf.List.remove)
    * [.each(cb)](#leaf.List.each)
    * [.count()](#leaf.List.count) ⇒ <code>number</code>
    * [.sort(comparer)](#leaf.List.sort)
    * [.reset()](#leaf.List.reset)
    * [.toJSON()](#leaf.List.toJSON) ⇒ <code>string</code>
    * [.loadData(items, [merge])](#leaf.List.loadData)
    * [.loadJSON(url, [success], [failure], [merge])](#leaf.List.loadJSON)
    * [.template(text)](#leaf.List.template) ⇒ <code>string</code>

<a name="new_leaf.List_new"></a>

#### new List()
Represents a collection of Models.

<a name="leaf.List.get"></a>

#### List.get(index) ⇒ <code>Object</code>
Get the Model at the specified index in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>Object</code> - The Model.  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the Model in the List. |

<a name="leaf.List.add"></a>

#### List.add(model)
Add a Model to the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>Object</code> | The Model. |

<a name="leaf.List.remove"></a>

#### List.remove(index)
Remove a Model from the List at the specified index.

**Kind**: static method of <code>[List](#leaf.List)</code>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the Model. |

<a name="leaf.List.each"></a>

#### List.each(cb)
Execute a callback Function for each Model in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.List.count"></a>

#### List.count() ⇒ <code>number</code>
Return the number of Models in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>number</code> - The number of Models.  
<a name="leaf.List.sort"></a>

#### List.sort(comparer)
Sort the Models in the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  

| Param | Type | Description |
| --- | --- | --- |
| comparer | <code>function</code> | The comparer Function. |

<a name="leaf.List.reset"></a>

#### List.reset()
Removes all the Models in a List.

**Kind**: static method of <code>[List](#leaf.List)</code>  
<a name="leaf.List.toJSON"></a>

#### List.toJSON() ⇒ <code>string</code>
Serialize the List to JSON format.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>string</code> - A JSON string.  
<a name="leaf.List.loadData"></a>

#### List.loadData(items, [merge])
Load an Array of Models into the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;Object&gt;</code> | The Models to load. |
| [merge] | <code>boolean</code> | If True, merge with existing Models. |

<a name="leaf.List.loadJSON"></a>

#### List.loadJSON(url, [success], [failure], [merge])
Load Models from a JSON file into the List.

**Kind**: static method of <code>[List](#leaf.List)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The url. |
| [success] | <code>function</code> | The success callback. |
| [failure] | <code>function</code> | The failure callback. |
| [merge] | <code>boolean</code> | If True, merge with existing Models. |

<a name="leaf.List.template"></a>

#### List.template(text) ⇒ <code>string</code>
Return a List template with double-brackets replaced with values.

**Kind**: static method of <code>[List](#leaf.List)</code>  
**Returns**: <code>string</code> - The target string.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The source string. |

<a name="leaf.Model"></a>

### leaf.Model
**Kind**: static class of <code>[leaf](#leaf)</code>  

* [.Model](#leaf.Model)
    * [new Model()](#new_leaf.Model_new)
    * [.items](#leaf.Model.items) : <code>Object</code>
    * [.get(key)](#leaf.Model.get) ⇒ <code>\*</code>
    * [.set(key, value)](#leaf.Model.set)
    * [.delete(key)](#leaf.Model.delete)
    * [.contains(key)](#leaf.Model.contains) ⇒ <code>boolean</code>
    * [.on(key, cb)](#leaf.Model.on)
    * [.each(cb)](#leaf.Model.each)
    * [.toJSON()](#leaf.Model.toJSON) ⇒ <code>string</code>
    * [.template(text)](#leaf.Model.template) ⇒ <code>string</code>

<a name="new_leaf.Model_new"></a>

#### new Model()
Represents a collection of Models.

<a name="leaf.Model.items"></a>

#### Model.items : <code>Object</code>
The raw item collection. Do not modify directly.

**Kind**: static property of <code>[Model](#leaf.Model)</code>  
<a name="leaf.Model.get"></a>

#### Model.get(key) ⇒ <code>\*</code>
Get the value of the specified key in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>\*</code> - The value.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |

<a name="leaf.Model.set"></a>

#### Model.set(key, value)
Set the value of the specified key in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |
| value | <code>\*</code> | The value. |

<a name="leaf.Model.delete"></a>

#### Model.delete(key)
Remove the specified key from the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |

<a name="leaf.Model.contains"></a>

#### Model.contains(key) ⇒ <code>boolean</code>
Determine if the specified key exists in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>boolean</code> - True if the key is found.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |

<a name="leaf.Model.on"></a>

#### Model.on(key, cb)
Set a callback Function for when the specified key.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.Model.each"></a>

#### Model.each(cb)
Execute a callback Function for each key in the Model.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.Model.toJSON"></a>

#### Model.toJSON() ⇒ <code>string</code>
Serialize the Model to JSON format.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>string</code> - A JSON string.  
<a name="leaf.Model.template"></a>

#### Model.template(text) ⇒ <code>string</code>
Return a Model template with double-brackets replaced with values.

**Kind**: static method of <code>[Model](#leaf.Model)</code>  
**Returns**: <code>string</code> - The target string.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The source string. |

<a name="leaf.View"></a>

### leaf.View
**Kind**: static class of <code>[leaf](#leaf)</code>  

* [.View](#leaf.View)
    * [new View()](#new_leaf.View_new)
    * [.render([props])](#leaf.View.render)
    * [.each(cb)](#leaf.View.each)

<a name="new_leaf.View_new"></a>

#### new View()
Represents a view, component, or HTML fragment.

<a name="leaf.View.render"></a>

#### View.render([props])
Render the view on the webpage.

**Kind**: static method of <code>[View](#leaf.View)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [props] | <code>Object</code> | The option.props values. |

<a name="leaf.View.each"></a>

#### View.each(cb)
Execute a callback Function for each match in option.selector.

**Kind**: static method of <code>[View](#leaf.View)</code>  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.Router"></a>

### leaf.Router
**Kind**: static class of <code>[leaf](#leaf)</code>  

* [.Router](#leaf.Router)
    * [new Router()](#new_leaf.Router_new)
    * [.add(hash, cb)](#leaf.Router.add)
    * [.get(hash)](#leaf.Router.get) ⇒ <code>function</code>
    * [.remove(hash)](#leaf.Router.remove)
    * [.contains(hash)](#leaf.Router.contains) ⇒ <code>boolean</code>
    * [.invoke([hash])](#leaf.Router.invoke)
    * [.listen([hash])](#leaf.Router.listen)
    * [.ignore()](#leaf.Router.ignore)

<a name="new_leaf.Router_new"></a>

#### new Router()
Represents a collection of Routes.

<a name="leaf.Router.add"></a>

#### Router.add(hash, cb)
Adds a route to the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash. |
| cb | <code>function</code> | The callback Function. |

<a name="leaf.Router.get"></a>

#### Router.get(hash) ⇒ <code>function</code>
Get the callback Function of a route in the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Returns**: <code>function</code> - The callback Function.  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash. |

<a name="leaf.Router.remove"></a>

#### Router.remove(hash)
Remove the specified route from the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash. |

<a name="leaf.Router.contains"></a>

#### Router.contains(hash) ⇒ <code>boolean</code>
Determine if the specified route exists in the Router.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
**Returns**: <code>boolean</code> - True if the hash is found.  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash. |

<a name="leaf.Router.invoke"></a>

#### Router.invoke([hash])
Execute a route's callback Function.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [hash] | <code>string</code> | The hash to load. |

<a name="leaf.Router.listen"></a>

#### Router.listen([hash])
Listen for hash changes and invoke routes.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [hash] | <code>string</code> | The hash to load. |

<a name="leaf.Router.ignore"></a>

#### Router.ignore()
Stop listening to hash changes.

**Kind**: static method of <code>[Router](#leaf.Router)</code>  
<a name="leaf.RepeatView"></a>

### leaf.RepeatView
**Kind**: static class of <code>[leaf](#leaf)</code>  
<a name="new_leaf.RepeatView_new"></a>

#### new RepeatView()
Directive to return a List template with double-brackets replaced with values.

<a name="leaf.http"></a>

### leaf.http : <code>object</code>
**Kind**: static namespace of <code>[leaf](#leaf)</code>  

* [.http](#leaf.http) : <code>object</code>
    * [.request(options, success, failure)](#leaf.http.request)
    * [.get(url)](#leaf.http.get)
    * [.del(url)](#leaf.http.del)
    * [.head(url)](#leaf.http.head)
    * [.jsonp(url)](#leaf.http.jsonp)
    * [.post(url, data)](#leaf.http.post)
    * [.patch(url, data)](#leaf.http.patch)
    * [.include(url, selector, success, failure)](#leaf.http.include)

<a name="leaf.http.request"></a>

#### http.request(options, success, failure)
Executes a HTTP request.

**Kind**: static method of <code>[http](#leaf.http)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The request options. |
| success | <code>function</code> | The success Function. |
| failure | <code>function</code> | The failure Function. |

<a name="leaf.http.get"></a>

#### http.get(url)
Shorthand function to execute a HTTP GET request.

**Kind**: static method of <code>[http](#leaf.http)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |

<a name="leaf.http.del"></a>

#### http.del(url)
Shorthand function to execute a HTTP DELETE request.

**Kind**: static method of <code>[http](#leaf.http)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |

<a name="leaf.http.head"></a>

#### http.head(url)
Shorthand function to execute a HTTP HEAD request.

**Kind**: static method of <code>[http](#leaf.http)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |

<a name="leaf.http.jsonp"></a>

#### http.jsonp(url)
Shorthand function to execute a HTTP JSONP request.

**Kind**: static method of <code>[http](#leaf.http)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |

<a name="leaf.http.post"></a>

#### http.post(url, data)
Shorthand function to execute a HTTP POST request.

**Kind**: static method of <code>[http](#leaf.http)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| data | <code>\*</code> | The data. |

<a name="leaf.http.patch"></a>

#### http.patch(url, data)
Shorthand function to execute a HTTP PATCH request.

**Kind**: static method of <code>[http](#leaf.http)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| data | <code>\*</code> | The data. |

<a name="leaf.http.include"></a>

#### http.include(url, selector, success, failure)
Shorthand function to execute a HTTP GET request and put the content in an element.

**Kind**: static method of <code>[http](#leaf.http)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL. |
| selector | <code>string</code> | The selector string. |
| success | <code>function</code> | The success Function. |
| failure | <code>function</code> | The failure Function. |

<a name="leaf.isString"></a>

### leaf.isString(value) ⇒ <code>boolean</code>
Determines if a reference is a string.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isNumber"></a>

### leaf.isNumber(value) ⇒ <code>boolean</code>
Determines if a reference is a number.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a number.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isBoolean"></a>

### leaf.isBoolean(value) ⇒ <code>boolean</code>
Determines if a reference is a boolean.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a boolean.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isArray"></a>

### leaf.isArray(value) ⇒ <code>boolean</code>
Determines if a reference is an Array.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is an Array.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isFunction"></a>

### leaf.isFunction(value) ⇒ <code>boolean</code>
Determines if a reference is a Function.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a Function.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isObject"></a>

### leaf.isObject(value) ⇒ <code>boolean</code>
Determines if a reference is an Object.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is an Object.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isDate"></a>

### leaf.isDate(value) ⇒ <code>boolean</code>
Determines if a reference is a Date.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is a Date.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isDefined"></a>

### leaf.isDefined(value) ⇒ <code>boolean</code>
Determines if a reference is defined.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is defined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.isUndefined"></a>

### leaf.isUndefined(value) ⇒ <code>boolean</code>
Determines if a reference is undefined.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>boolean</code> - True if value is undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The reference to check. |

<a name="leaf.concat"></a>

### leaf.concat(args) ⇒ <code>string</code>
Concatenates multiple string arguments into a single string.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>string</code> - The concatenated string.  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Array.&lt;string&gt;</code> | The arguments to concatenate. |

<a name="leaf.queryString"></a>

### leaf.queryString(name)) ⇒ <code>string</code>
Returns the value of a queryString in the URL.

**Kind**: static method of <code>[leaf](#leaf)</code>  
**Returns**: <code>string</code> - The value.  

| Param | Type | Description |
| --- | --- | --- |
| name) | <code>string</code> | The name. |

