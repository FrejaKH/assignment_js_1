
let chosenYear = prompt('Write in a year');
console.log('Is the year ' + chosenYear + ' a leap year?');

console.log((chosenYear % 4) === 0);



/* Løsning

(year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0)

*/