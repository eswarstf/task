const fs = require('fs');

fs.readFile('./prize.json', (err, data) => {
    let data1 = JSON.parse(data);
    let prize = data1.prizes;

    // fetch by year && category
    prize.map(function (person) {
        if (person.year === "2017" && person.category === "chemistry") {
            console.log(person);
        }
    });
});
