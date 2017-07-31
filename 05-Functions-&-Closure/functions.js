function concatString(){
	var str = "";
	var arr = Array.prototype.slice.call(arguments);
	for (i = 0; i < arr.length; i++){
		str += arr[i];
	}
	return str;
}


var yourFunctionRunner = function(){
	var arr = [];

	for (var i = 0; i < arguments.length; i++){
		arr += arguments[i]();
	}

	return arr;
}


var makeAdder = function(n){
	
	var addFunc = function(num){
		return n + num;
	}
	return addFunc;

}


var once = function(func){
	func();
	var newFunc = function(){
		
	}
	return newFunc;
}


var createObjectWithClosures = function(){
	var obj = new Object;
	var val = 0;
	obj.oneIncrementer = function(){
		val += 1;
	}
	obj.tensIncrementer = function(){
		val += 10;
	}
	obj.getValue = function(){
		return val;
	}
	obj.setValue = function(num){
		val = num;
	}
	return obj;
}