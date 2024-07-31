const findTheOldest = function(array) {
    let ages = array.map((person) => {
        if (!("yearOfDeath" in person))
        {
            person.yearOfDeath = new Date().getFullYear();
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
        return person;
    });
    console.log(ages);
    let sortedAges = ages.sort((a,b) => (a.age > b.age ? 1 : -1));
    console.log(sortedAges);
    return sortedAges[sortedAges.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
