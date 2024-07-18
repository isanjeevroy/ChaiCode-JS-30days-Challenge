// Activity 1: Array Cration and Access
//Task 1
const arr = [1,2,3,4,5]
console.log(arr);

//Task 2
let n = arr.length
console.log(arr[0]);
console.log(arr[n-1]);

// Activity 2: Array Methods (Basic)
//Task 3
arr.push(6)
console.log(arr);

//Task 4
arr.pop()
console.log(arr);

//Task 5
arr.shift()
console.log(arr);

//Task 6
arr.unshift(1)
console.log(arr);

// Activity 3: Array Methods (Intermediate)
//Task 7
const doubleArr = []
arr.map(el=>doubleArr.push(el*2))
console.log(doubleArr);

//Task 8
const evenArr = arr.filter(el=> el%2==0)
console.log(evenArr);

//Task 9
const sum = arr.reduce((prev,curr)=>prev+curr,0)
console.log(sum);

// Activity 4: Array Iteration
//Task 10
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//Task 11
arr.forEach(el=>
    console.log(el)
)

// Activity 5: Multi-dimensional Arrays
//Task 12
const twoDArray = [
    [1,2,3],
    [2,4,6],
    [3,6,9]
]
for(let i=0; i<twoDArray.length; i++){
    for(let j=0; j<twoDArray[0].length; j++){
        console.log(twoDArray[i][j]);
    }
}

//Task 13
console.log(twoDArray[0][1]);