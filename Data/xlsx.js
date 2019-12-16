const csvFilePath='restaurantsa9126b3.csv';
const csv=require('csvtojson');
var result = csv()
.fromFile(csvFilePath);

 console.log(result);
// Async / await usage
//const jsonArray=await csv().fromFile(csvFilePath);