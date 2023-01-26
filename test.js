
  // This section will make API Calls
  /*
  const axiosRequest = require('axios')
  
  async function getActivity() {
    try {
        
    let response = await axiosRequest.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    console.log(`You could ${response.data.drinks}`)
    } catch (error) {
        console.error(`ERROR: ${error}`)
  }
} 

  getActivity() 
*/

/*
const fiscalWeek = 
`{
    "date": "2022-08-12",
    "fiscal_week": 202228,
    "fiscal_month": 202207,
    "fiscal_quarter": 202203,
    "fiscal_year": 2022
}`;

`{
    "date": "2024-11-14",
  "fiscal_week": 202442,
  "fiscal_month": 202410,
  "fiscal_quarter": 202404,
  "fiscal_year": 2024
}`;

const week = JSON.parse(fiscalWeek);



console.log(week.fiscal_week);
console.log(new Date());

*/

const jsonObj = require('./dates.json'); 


console.log(jsonObj['2023-2-17'].fiscal_week);

// Schedule a message



async function postIt() {

    console.log(" A ");
    console.log(" B ");
    console.log(" C ");



    console.log(" D ");
    console.log(" E ");

} 

postIt();

let sumOf = (x, y) => x + y
console.log(sumOf(2, 5));

let randomNumber = (x) => Math.random
console.log(randomNumber(2));