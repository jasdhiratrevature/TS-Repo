function greeting(name:string):void{
    console.log("Hello "+name);
}

function add(num1:number , num2:number):number{
    return (num1+num2);
}

function multiply(num1:number , num2:number,num3?:number):number{
    return num1*num2
}
let result:number;
result=multiply(3,4)
console.log("Result = "+result)


//greeting('Jasdhir')