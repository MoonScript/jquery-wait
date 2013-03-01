// Wrap setTimeout in a Deferred
$.wait = function(delay){
  var deferred = $.Deferred();
  var timer = setTimeout(deferred.resolve, delay);
  deferred.fail(function(){
    clearTimeout(timer);
  });
  return deferred;
};