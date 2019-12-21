                     
const fs = require('fs');

fs.readFile('./prize.json', (err, data) => {
    let data1 = JSON.parse(data);
    let prize = data1.prizes;
    let array = [];

    prize.map(function (person) {
       
        let categoryArray = person.laureates;
        for (var i = 0; i < categoryArray.length; i++) {
            let name = categoryArray[i].firstname;

            array.push(name);
            let sortedArray = array.sort()
            sortedArray.forEach(element => {
                
            // console.log(sortedArray)
            if (categoryArray[i].firstname == element) {
                console.log(person);
            }
            });
               
        }
        
    });
});