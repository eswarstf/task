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
            // console.log(sortedArray)
           if (categoryArray[i].firstname == sortedArray) {
               console.log(person);
               }
            }
       //  }
    });
        //    console.log(array.sort());

    // prize.map(function (person) {
    //     // if (person.year === "2018") {
    //         // console.log(person.laureates);
    //          let categoryArray = person.laureates;
    //          for (var i = 0; i < categoryArray.length; i++) {
    //              if (categoryArray[i].firstname == 'Arthur') {
    //                 console.log(categoryArray[i]);
    //                 //  console.log(person.year);
                     
    //               }
    //          }
    //     //  }
    //  });
    // prize.map(function (person) {
    //    // if (person.year === "2018") {
    //        // console.log(person.laureates);
    //         let categoryArray = person.laureates;
    //         for (var i = 0; i < categoryArray.length; i++) {
    //             if (categoryArray[i].firstname == 'Arthur') {
    //                 console.log(person.year);
                    
    //              }
    //         }
    //    //  }
    // });

})
   // let data2= prize.filter((obj) => {
    //    let data3 = obj.laureates.filter((obj2) => {
    //     //    console.log(obj2);
    //        let obj3 = obj2;
    //        console.log(obj3);
    //     //    console.log(Object.values(obj2)); //object values all
    //         // console.log(Object.entries(obj2))
    //    })
    // })
    // console.log(prize);

// let nameOnly = JSON.parse(data).filter(function (entry) {
//     return entry.firstName;
// })

// console.log(data1);
    // let my_json = JSON.stringify(data1)
    // let filter_json = find_in_object(JSON.parse(my_json),{firstname:"firstname"})
    // function find_in_object(my_object, my_criteria){

    //     return my_object.filter(function(obj) {
    //       return Object.keys(my_criteria).every(function(c) {
    //         return obj[c] == my_criteria[c];
    //       });
    //     });
      
    //   }
    // let result = data1.filter(obj => {
    //     console.log(obj.name);
    // });