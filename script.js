do {
    var ban = +prompt("Enter any number");
    if (!isNaN(ban) && ban !== 1) {
        alert(ban + " bananas");
    } else if (ban === 1) {
        alert("1 banana");
    } else {
        alert("Please enter a valid number");
    }
} while (isNaN(ban) || ban == 1)
