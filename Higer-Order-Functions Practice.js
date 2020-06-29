const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//filter
const retailCompanies = companies.filter(i => i.category === 'Retail');
//console.log(retailCompanies);

const eightiesCompanies = companies.filter(
  i => i.start >= 1980 && i.end < 1990
);
//console.log(eightiesCompanies);

const tenYearsOrMore = companies.filter(i => i.end - i.start >= 10);
//console.log(tenYearsOrMore);

//map
const companiesNames = companies.map(i => `${i.name}: ${i.start} - ${i.end}`);
//console.log(companiesNames);
 
const squareRoot = ages.map(i => Math.sqrt(i));
//console.log(squareRoot)

//sort
const sortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1);
//console.table(sortedCompanies)

const sortedAges = ages.sort((a,b)=> a > b ? 1: -1);
//console.log(sortedAges)

//reduce
const ageSum = ages.reduce((a,b) => a + b)
//console.log(ageSum);

const totalYearsCompanies = companies.reduce((a,b) => a + (b.end - b.start), 0);
//console.log(totalYearsCompanies)

const combined = ages
  .map(i => Math.sqrt(i))
  .filter(i => i > 6)
  .sort((a,b) => b-a)
  .reduce((a,b) => a + b, 0)
  
//console.log(combined)  

//Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
   const newArray = arr.filter(i => i.voted)
   .reduce((a,b,c,d) => d.length)
   return newArray
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
//console.log(totalVotes(voters)); // 7

//Given an array of all your wishlist items,
//figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
   const newArray = arr.map(i => i.price)
      .reduce((a,b) => a + b)
   return newArray;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

//console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
   /*const arr1 = arr[0];
   const arr2 = arr [1];
   const arr3 = arr[2]
   const newArray = arr1.concat(arr2);
   const newArray1 = newArray.concat(arr3) */
   const newArray1 = arr.reduce((a,b) => a.concat(b), [])
   return newArray1;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// Given an array of potential voters,
//  return an object representing the results of the vote
//  Include how many of the potential voters 
//  were in the ages 18-25, how many from 26-35,
//  how many from 36-55, and how many of each 
//  of those age ranges actually voted.
//  The resulting object containing this data should have 6 properties. 
//  See the example output at the bottom.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   const young = arr.filter(i => i.age >= 18 && i.age <= 25).length;
   const youngVoted = arr.filter(i => i.age >= 18 && i.age <= 25 && i.voted).length;
   const mid = arr.filter(i => i.age >=26 && i.age <= 35).length;
   const midVoted = arr.filter(i => i.age >= 26 && i.age <= 35 && i.voted).length;
   const old = arr.filter(i => i.age >= 36 && i.age <= 55).length;
   const oldVoted = arr.filter(i => i.age >= 36 && i.age <= 55).length;

   return {
     young : young, 
     youngVoted: youngVoted, 
     mid: mid, 
     midVoted: midVoted, 
     old: old, 
     oldVoted: oldVoted
   }
}

//console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/