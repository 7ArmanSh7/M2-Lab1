//STEP 1
const halfNumber =(num)=>{
	"use Strict";
	var half = num/2;
	return half;
}
var num1 = 5;
var result1 = halfNumber(num1);
console.log("Half of "+num1+" is "+result1+".");
//STEP 2
const squareNumber = (num)=>{
	var squared = num**2;
	return squared;
}
var num2 = 3;
var result2 = squareNumber(num2);
console.log("The result of squaring the number "+num2+" is "+result2+".");
//STEP 3
const percentOf = (num1,num2)=>{
	var percentage = (num1/num2)*100;
	return percentage;
}
var num3 = 2;
var num4 = 4;
var result3 = percentOf(num3,num4);
console.log(num3+" is %"+result3+" of "+num4+".");
//STEP 4
const findModulus = (a,b)=>{
	var module = b%a;
	return module;
}
var num5 = 4;
var num6 = 10;
var result4 = findModulus(num5,num6);
console.log(result4+" is the modulus of "+num5+" and "+num6+".");
//STEP 5
const getSumNumInput = ()=>{
	var parameters= window.prompt("Please enter the parameters for the function sumNum");
	parameters = parameters.split(",");
	return sumNumbers(parameters);
}
const sumNumbers = (nums)=>{
	var sumN = 0;
	for(var i=0; i<nums.length;i++){
		sumN += parseInt(nums[i]);
	}
	return sumN;
}
var res = getSumNumInput();
console.log("The sum of entered numbers are "+res+".");