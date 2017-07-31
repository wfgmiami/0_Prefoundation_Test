function createCalculator(){
	var calc = {};
	var val = 0;

	calc.value = function(){
		return val;
	}

	calc.add = function(num){
		val += num;
	}

	calc.subtract = function(num){
		val -= num;
	}

	return calc;
}
	