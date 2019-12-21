const fs = require('fs');

fs.readFile('./prize.json', (err, data) => {
    let data1 = JSON.parse(data);
    let prize = data1.prizes;
    let array = [];

    prize.map(function (person) {
             let categoryArray = person.laureates;
             for (var i = 0; i < categoryArray.length; i++) {
                 if (categoryArray[i].firstname == 'Arthur') {
                    console.log(categoryArray[i]);
                  }
             }
     });
})