function repeat(str, n){
	var newStr = "";

	for(var i = 0; i < n; i++){
		newStr += str;
	}
	return newStr;
}


function sum(arr){
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		total += arr[i];
	}

	return total;
}


function gridGenerator(n){
	var block = "";
	var str = "";
	if(n == 0) { 
		return str;
	}else{

		for(var i = 1; i <= n; i++){
			if(i%2){
				block = "#";
			}else{
				block = " ";
			}
			for(var j = 1; j <= n; j++){
				
				str += block;
				if(block == " "){
					block = "#";
				}else{
					block = " ";
				}
			}
			str += "\n";
		}
	}

	return str;
}


function join(arr,s){
	var str = "";
	
	for(var i = 0; i < arr.length; i++){
		if(i == arr.length - 1){
			str += arr[i];
		}else if(s != undefined){
			str += arr[i] + s;
		}else{
			str += arr[i];
		}
	}

	return str;

}


function paramify(obj){
	var str = "";
	var flag = false;
	var prop = [];

	for(var v in obj){
		prop.push(v);
	}

	if(v == undefined){
		return str;
	}

	prop.sort();

	for(var i = 0; i < prop.length; i++){
		if(obj.hasOwnProperty(prop[i])){
			if(flag){
				str += "&" + prop[i] + "=" + obj[prop[i]];
			}else{
				str += prop[i] + "=" + obj[prop[i]];
			}
			flag = true;
		}
	}

	
	return str;
}


function paramifyObjectKeys(obj){
	var str = "";
	var flag = false;
	var prop = [];

	for(var v in obj){
		prop.push(v);
	}

	if(v == undefined){
		return str;
	}

	prop.sort();

	for(var i = 0; i < prop.length; i++){
		for(var j = 0; j < Object.keys(obj).length; j++){
			if(Object.keys(obj)[j] == prop[i]){
				if(flag){
					str += "&" + prop[i] + "=" + obj[prop[i]];
				}else{
					str += prop[i] + "=" + obj[prop[i]];
				}
				flag = true;
			}
		}
	}

	return str;
}


function renameFiles(arr){

	var str = "";
	var nums = [];
	var addNum = 1;

	for(var i = 0; i < arr.length; i++){
		str = arr[i].toString();
		if (str[str.length - 1] == ")"){
			for(var j = 0; j < str.length; j++){
				if(str[j] == "("){
					nums.push(Number(str.substring(j+1,str.length-1)));
				}
			}
		}
	}
	nums.sort(function(a,b) {return a-b});

	for (var i = 0; i < arr.length - 1; i++){
			for(var j= i + 1; j < arr.length; j++){
				if(arr[i] === arr[j]){
					nums.forEach(function(item){
						if(addNum == item){
							addNum ++;
						}
					});
					nums.push(addNum);
					nums.sort(function(a,b){return a-b});
					arr[j] = arr[j] + "(" + addNum + ")";
				}
			}

	}

	return arr;

}