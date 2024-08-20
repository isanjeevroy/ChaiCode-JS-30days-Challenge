// Activity 1: For loop
//Task-1
for(let i=1;i<=10;i++){
    console.log(i);
}

//Task-2
let table =5;
for(let i=1;i<=10;i++){
    console.log(`${table} * ${i} = ${table*i}`);
}

// Activity 2: While Loop
//Task-1
let digit =1;
let sum = 0;
while(digit<=10){
    sum+=digit;
    digit++;
}
console.log(sum);

//Task-2
let num = 10;
while(num>0){
    console.log(num);
    num--;
}

// Activity 3: Do...While Loop
//Task-1
let num1 = 1;
do{
    console.log(num1);
    num1++;
}while(num1<=5);

//Task-2
let num2 = 5;
let fact =1;
do{
    fact = fact * num2;
    num2--;
}while(num2>0)

console.log(fact);

// Activity 4: Nested Loops
let n=5;
for(let i=0; i<n; i++){
    let row = "";
    for(let j=0; j<=i; j++){
        row+="* ";
    }
    console.log(row);
}

// Activity 5: Loop Control Statements
//Task-1
for(let i=1;i<=10;i++){
    if(i===5)
        continue;
    console.log(i);
}

//Task-2
for(let i=1;i<=10;i++){
    if(i===7)
        break;
    console.log(i);
}