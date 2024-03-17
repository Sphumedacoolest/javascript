function returnLastArgument() {
    let lastOne = null;
    for (let i = 0; i < arguments.length; i++) {
        lastOne = arguments[i];
    }
    return lastOne;
}

// Test the function
console.log(returnLastArgument('apple', 'banana', 'cherry'));

