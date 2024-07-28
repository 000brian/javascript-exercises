const sumAll = function(num1, num2) 
{
    let start = 0;
    let end = 0;
    
    // Error checking:
    //  Both parameters must be numbers
    if (typeof num1 !== "number" || typeof num2 !== "number")
    {
        return "ERROR";
    }
    //  Both numbers must be integers
    else if (!Number.isInteger(num1)|| !Number.isInteger(num2))
    {
        return "ERROR";
    }
    //  Numbers must be positive
    else if (num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }

    // Edge case: numbers are same
    if (num1 === num2)
    {
        return num1;
    }

    if (num1 > num2)
    {
        start = num2;
        end = num1;
    }
    else 
    {
        start = num1;
        end = num2;
    }

    let sum = 0;
    for (let i = start; i <= end; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
