const fs = require('fs');

fs.readFile('./prize.json', (err, data) => {
    let data1 = JSON.parse(data);
    let prize = data1.prizes;
    let array = [];

    //    console.log(array.sort());

    prize.map(function (person) {
        if (person.year === "2018") {
            console.log(person.laureates);
            let categoryArray = person.laureates;
            for (var i = 0; i < categoryArray.length; i++) {
                if (categoryArray[i].firstname == 'Arthur') {
                    console.log(categoryArray[i]);
                    //  console.log(person.year);
                }
            }
        }
        });
})