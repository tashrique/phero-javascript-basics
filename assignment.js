function calculateMoney(ticketSale) {

    if (ticketSale < 0) {
        return "Baker bhai, positive number den!";

    }
    return (120 * ticketSale) - (500 + (8 * 50));
}

// console.log(calculateMoney(10))
// console.log(calculateMoney(1055))
// console.log(calculateMoney(93))
// console.log(calculateMoney(-130))



function checkName(name) {

    if (typeof name != "string") {
        return "invalid";
    }

    name = name.toLowerCase()

    let lastLetter = name[name.length - 1];
    let permitted = ["a", "y", "i", "e", "o", "u", "w"];

    if (permitted.includes(lastLetter)) {
        return "Good Name"
    } else {
        return "Bad Name"
    }
}

// console.log(checkName("Salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName("Jhankar"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));



function deleteInvalids(array) {

    let result = [];

    if (!(Array.isArray(array))) {
        return "Invalid Array";
    }

    for (const item of array) {

        let type = typeof item

        if (type !== "number" || type === "object" || Number.isNaN(item)) {
            continue;

        }

        else if (1) {
            result.push(item);
        }
    }

    return result;
}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1", { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 3] }));


function password(obj) {


    if (Object.keys(obj).length < 3 || obj.birthYear < 1000 || obj.birthYear > 9999) {
        return "invalid";
    }

    let pass = ""

    let web = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
    let name = obj.name;
    let year = obj.birthYear.toString();

    pass += web + "#" + name + "@" + year;

    return pass;
}


// console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: "maisha", birthYear: 2002 }));



function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalSavings = 0;

    for (let income of arr) {
        if (income >= 3000) {
            income = income * 0.8;
        }

        totalSavings += income;
    }

    totalSavings -= livingCost;

    if (totalSavings < 0) {
        return "earn more";
    }

    return totalSavings;

}


console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));