const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replaceAll(",", "");
    string = string.replaceAll(".", "");
    string = string.replaceAll("!", "");
    string = string.replaceAll("?", "");
    string = string.replaceAll(" ", "");

    let arrayString = string.split("");
    let reverseArray = arrayString.reverse();
    let reverseString = reverseArray.join("");
    console.log("comparing " + string + " and" + reverseString);
    return string === reverseString;
    

};

// Do not edit below this line
module.exports = palindromes;
