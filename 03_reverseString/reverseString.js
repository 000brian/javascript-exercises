const reverseString = function(str) 
{
    let reverseStr = "";
    for (let i = str.length; i >= 0; i--)
    {
        reverseStr += str.charAt(i);
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
