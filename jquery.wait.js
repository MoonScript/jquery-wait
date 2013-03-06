// Wrap setTimeout in a Deferred
$.wait = function(delay, context){
  var deferred = $.Deferred();
  var timer = setTimeout(function(){
    deferred.resolveWith(context || deferred);
  }, delay);
  deferred.fail(function(){
    clearTimeout(timer);
  });
  return deferred;
};
