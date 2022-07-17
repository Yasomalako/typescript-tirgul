//1//
let num:number = document.getElementById("mynum").value;
let firstNum:number = document.getElementById("myfirstNumber").value;
let secondNum:number = document.getElementById("mysecondNumber").value;
// function getNumber():void{
// if(num > 10){
//  console.log("num is grether then 10");

// }
// else{
//     return console.log("less then then");
    
// }
// }
// 2
// function userNum():void{
//     if(num>10){
//      console.log("greater then ten"); 
//     }
//     else{
//         console.log("less then ten");
//     }
//     if(num==10){
//         console.log("10 is equal to num");
//     }
    
// }
//3/
function printBigernum():void{
    if(firstNum<secondNum){
        console.log("second num is higer then firstnumber");
    }
    else{
        console.log("first Number is greater the second number");
    }
    if(firstNum<secondNum){
        console.log("the numbers are equal");
    }
}
printBigernum()
// /4/
function getMin(num1:number,num2:number):number{
    return Math.min(num1,num2)
   }
   console.log(getMin(1.2, 4.3))
   
   // /5/
   function getMinbetween(num1:number,num2:number,num3:number):number{
    return Math.min(num1,num2,num3)
   }
   console.log(getMinbetween(9.2,5.3,4.7));
   
// 6
function getAverg(num1:number,num2:number,num3:number):number{
 let sum = num1+num2+num3
 let avrg = sum/3  
 return console.log(avrg);
 
}
getAverg(5,8,2)

// 7
function getSum(num1:number,num2:number,num3:number):number{
let sum = num1+num2+num3
return console.log(sum);

}
getSum(5.3,4.6,8.1)
//8