function checkNumber(val) {
    try {
        if (isNaN(val)) {
            throw new Error(val + " is not a number");
        } else {
            console.log("Got a number");
        }
    } catch (error) {
        console.log("Caught an error: ", error);
    } finally {
        console.log("The value was: ", val);
        console.log("Function has completed");
    }
}

// Test the function with a string
checkNumber("hello");

// Test the function with a number
checkNumber(10);
