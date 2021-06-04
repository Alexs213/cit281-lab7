class MyError extends Error {
    constructor (args){
        super(args);
        this.name = 'MyError'
    }
}

try {
    throw new throwGenericError("Generic Error")
} catch (err) {
    console.log(`${err.name}: ${err.message}`)
}

try {
    throw new throwCustomError("Custom Error")
} catch (err) {
    console.log(`${err.name}: ${err.message}`)
}

try{
    throwGenericError()
} catch (err){

}
finally {

}
class CustomError extends Error{}

function throwGenericError(){
    throw new Error("Generic Error")
}
function throwCustomError(){
    throw new Error("Custom Error")
}
console.log("Forces generic error")

try{
    console.log("Generic error try block");
    throwGenericError();
} catch(error){
    console.log("Generic error catch block")
    console.log(`${error.name}: ${error.message}`)
} finally{
    console.log("Generic error finally block")
}

    console.log("Force custom error")
try{
    console.log("Custom error try block");
    throwCustomError();
} catch(error){
    console.log("Custom error catch block")
    console.log(`Custom${error.name}: ${error.message}`)
} finally{
    console.log("Custom error finally block")
}
