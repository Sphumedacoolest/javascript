let day = prompt("Enter your favourite day of the week:").toLowerCase()
let theResponse;
switch (day) {
    case "monday":
        theResponse = "Ack!";
        break;
    case "tuesday":
        theResponse = "Taco day!";
        break;
    case "wednesday":
        theResponse = "Halfway there!";
        break;
    case "thursday":
        theResponse = "It’s the new Friday!";
        break;
    case "friday":
        theResponse = "TGIF! Yeah!";
        break;
    case "saturday":
        theResponse = "What a day!";
        break;
    case "sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven’t heard of that one!";
        break;
}
alert(theResponse)