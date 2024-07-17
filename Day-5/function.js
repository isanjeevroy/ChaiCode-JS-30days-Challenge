// Activity 1: Function Declaration
//Task-1
function checkEvenAndOdd(n){
    if(n%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
checkEvenAndOdd(12);
checkEvenAndOdd(15);

//Task-2
function calculateSquare(n){
    return n*n;
}
let result = calculateSquare(12);
console.log(result);

// Activity 2: Function Expression
//Task-3
function maxNumer(n1,n2){
    if(n1>n2){
        console.log(n1);
    }else{
        console.log(n2);
    }
}
maxNumer(10,23);
//Task-4
function concateStrings(str1,str2){
    return str1+str2;
}
let output = concateStrings("Sanjeev","Usha");
console.log(output);

// Activity 3: Arrow Functions
//Task-5
let res = (n1,n2)=> n1+n2;
console.log(res(12,13));

//Task-6
let checkSpecificChar = (str) =>{
    const spChars = /[@$%^&*()<>{}]/;
    if(spChars.test(str)){
        return true;
    }else{
        return false;
    }
}
console.log(checkSpecificChar("Sanjeev&Usha"));

// Activity 4: Function Parameters and Default Values
//Task-7
function product(n1,n2=10){
    return n1*n2
}
console.log(product(10,10));
console.log(product(10));

//Task-8
function greeting(name,age=21){
    return `Hey ${name},Happy Birthday you are now ${age}.`
}
console.log(greeting("Usha"));
console.log(greeting("Sanjeev",22));
// Activity 5: Higher-Order Functions
//Task-9
function higherOrderFun(fun, count){
    while(count>0){
        count--;
        fun();
    }
}
// function sayHi(){
//     console.log("Hi");
// }
const sayHi = () => console.log("Hi");
higherOrderFun(sayHi,3);

//Task-10
function higherOrderFunction(fun1,fun2,val){
    let res1 = fun1(val);
    return fun2(res1);
}
const addByTwo = (n)=>n+2;
const multiplyByTwo = (n)=>n*2;

const answer = higherOrderFunction(addByTwo,multiplyByTwo,3);
console.log(answer);
