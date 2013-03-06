jquery-wait
===========

$.wait jQuery extension that wraps setTimeout in a [Deferred](http://api.jquery.com/category/deferred-object/) object.

Basic example:

```JavaScript
$.wait(500).then(function(){
  console.log('A half-second later.');
});
```

Passing the *context* as the 2nd parameter:

```JavaScript
$.wait(500, someContext).then(function(){
  this.something(); // "this" is the context parameter that you pass in
});
```

This utility is similar to [_.delay](http://underscorejs.org/#delay), except that you can cancel the *done* callbacks by calling `.reject()` on the returned Deferred object:

```JavaScript
var deferred = $.wait(5000);

deferred.done(function(){
  console.log('This won\'t run if the deferred object is rejected within 5 seconds.');
});

if (confirm('Should we cancel the queued action?')) {
  deferred.reject();
}
```

Use it along side the Promise-enhanced *jqXHR* object returned from [$.ajax](http://api.jquery.com/jQuery.ajax/):

```JavaScript
var jqXHR = $.ajax({
  // ajax options here
});

$.when(jqXHR, $.wait(500)).done(function(){
  console.log('This won\'t run until the AJAX has returned and at least 500 ms have passed.');
});
```

> Use [$.when](http://api.jquery.com/jQuery.when/) to know when all Deferred objects have been completed.
