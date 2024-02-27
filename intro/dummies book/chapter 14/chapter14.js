document.getElementById("placeOrder").addEventListener("click", placeOrder);

function placeOrder() {
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    var orderPrice = calculatePrice(numPizzas, typePizza);
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    var theOutput = "<p>Thank you for your order.</p>";

    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery fee is: $" + deliveryPrice + "</p>";
    }

    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice) + "</p>";

    document.getElementById("displayTotal").innerHTML = theOutput;
}

function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    }

    orderPrice += extraCharge;
    return orderPrice;
}

function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;

    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }
    return deliveryPrice;
}
