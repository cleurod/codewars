
// Write a function, persistence, that takes in a positive parameter num and 
// returns its multiplicative persistence, which is the number of times you 
// must multiply the digits in num until you reach a single digit.


var count = 0;
function persistence(num) {
  if(num.toString().length==1){
    var x = count; 
    count = 0;
    	return x;
  }
  count++;
  var multiply = 1;
  var strSplit = num.toString().split("");
  	for(var i =0; i< strSplit.length; i++){
   	 multiply*=parseFloat(strSplit[i]);
  	}
 return persistence(parseFloat(multiply));
© 2017 GitHub, Inc.
