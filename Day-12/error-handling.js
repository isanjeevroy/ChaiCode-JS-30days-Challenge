// Activity 1: Basic error handling with try-catch
//Task 1
function throwError(){
    throw new Error("This is error");
}
try {
    throwError();
} catch (error) {
    console.error("Error occurred: ",error.message);
}

//Task 2
function divideTwoNumber(a,b){
    try {
        console.log(a/b);
    } catch (error) {
        console.log(error)
    }
}
divideTwoNumber(10,0)

// Activity 2: Finally Block
// Task 3
try {
    console.log(10/0);
    
} catch (error) {
    console.log(error)
}
finally{
    console.log("Calculation completed")
}

// Activity 3: Custom Error objects


// Activity 4: Error handling in promises

// Activity 5: Graceful error handling in fetch