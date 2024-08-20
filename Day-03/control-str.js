// Activity-1: If-Else statements
// Task-1
const num = 10;
if (num > 0) {
    console.log("+ve");
} else if (num == 0) {
    console.log("-ve");
} else {
    console.log("zero");
}

// Task-2
const age = 67;
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}

// Activity-2: Nested If-Else Statements
const a=23,b=45,c=22;
if(a>b){
    if(a>c){
        console.log(a);
    }else{
        console.log(c);
    }
}else{
    if(b>c){
        console.log(b);
    }else{
        console.log(c);
    }
}

// Activity-3: Switch Case
// Task-1
const day=2
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Input");
}

//Task-2
const marks = 56;
let grade;

switch(true){
    case (marks>=90):
        grade ="A";
        break;
    case (marks>=80):
        grade ="B";
        break;
    case (marks>=70):
        grade ="C";
        break;
    case (marks>=60):
        grade ="D";
        break;
    default:
        grade ="F";

}

console.log(grade);

// Activity-4: Conditional (Ternary) Operator

let n = 13;
let res = n%2 ==0 ? console.log("Even"): console.log("Odd");

// Activity-5: Combining Conditions
// Leap years
// Method-1
const year = 1800;
if(year % 100){
    if(year%400){
        console.log("a leap year");
    }else{
        console.log("Not a leap year");
    }
} else{
    if(year%4){
        console.log("a leap year");
    }else{
        console.log("Not a leap year");
    }
}

// Method-2
if((year%4 ===0 && year %100 !=0 )||(year % 400 ===0)){
    console.log("a leap year");
}else{
    console.log("Not a leap year");
}