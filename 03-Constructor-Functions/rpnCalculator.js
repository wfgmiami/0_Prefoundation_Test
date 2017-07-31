var RPNCalculator = function(){
	this.total = 0;
}

RPNCalculator.prototype = [];

RPNCalculator.prototype.value = function(){
	return this.total;
}


RPNCalculator.prototype.plus = function(){
	
		var len = this.length - 1;
		if (len > 0){
			this.total = this[len - 1] + this[len];
			this.pop();
			this[len - 1] = this.total;

		} else {
			throw "rpnCalculator is empty";
		}	
}



RPNCalculator.prototype.minus = function(){

		var len = this.length - 1;
		if (len > 0){
			this.total = this[len - 1] - this[len];
			this.pop();
			this[len - 1] = this.total;
		} else {
			throw "rpnCalculator is empty";
		}

}

RPNCalculator.prototype.divide = function(){
	
		var len = this.length - 1;
		if (len > 0){
			this.total = this[len - 1] / this[len];
			this.pop();
			this[len - 1] = this.total;
		} else {
			throw "rpnCalculator is empty";
		}	

}



RPNCalculator.prototype.times = function(){
	
		var len = this.length - 1;
		if (len > 0){
			this.total = this[len - 1] * this[len];
			this.pop();
			this[len - 1] = this.total;
		} else {
			throw "rpnCalculator is empty";
		}	


}

