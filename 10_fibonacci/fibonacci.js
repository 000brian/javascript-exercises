const fibonacci = function(index) {
    let a = 1;
    let b = 1;
    if (typeof index === "string")
    {
        index = +index
    }
    if (index === 0)
    {
        return 0;
    }
    else if (index < 0)
    {
        return "OOPS";
    }
    
    for (let i = 2; i < index; i++)
    {
        let oldB = b;
        b = a + b;
        a = oldB;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
