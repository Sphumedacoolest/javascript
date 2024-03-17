// Create a function that will take the parameters for cookieName, cookieValue, and the number of days you want to set the cookie.
function setTestCookie(cookieName, cookieValue, days) {
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        let expires = "; expires=" + date.toUTCString();
    } else {
        let expires = "";
    }
    document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
}

// Create a function to create a test cookie with a value and expiry set after a number of days.
function setTestCookies() {
    setTestCookie("testCookie1", "testValue1", 7);
    setTestCookie("testCookie2", "testValue2", 7);
}

// Create a function to read a cookie value.
function showTestCookie(cookieName) {
    let nameEQ = cookieName + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Add two console log messages using the function to read both cookies you have set earlier.
function showTestCookies() {
    console.log(showTestCookie("testCookie1"));
    console.log(showTestCookie("testCookie2"));
}

// To delete a cookie, you need to set a date prior to the current date.
function deleteTestCookie(cookieName) {
    setTestCookie(cookieName, "", -1);
}
