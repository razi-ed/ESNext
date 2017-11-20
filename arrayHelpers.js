//map()
/*-------
- Plucking values

Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.*/
//#1
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
let areas = images.map(({ height, width }) => height * width);
console.log('area list :', areas);

//#2
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

let heights = images.map(({ height }) => height);
console.log('height list :', heights);

//#3
/* Using map, create a new array that contains the distance / time value from each trip.*/
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

let speeds = trips.map(({ distance, time }) => distance / time);

console.log('speed list:', speeds);



//filter()
//----------
/*Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.*/

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

let filteredNumbers = numbers.filter(num => num > 50);

console.log('filteredNumbers :', filteredNumbers);

/*Using filter, create a new array that contains products whose quantity is greater than 0 and price less than 100*/

var products = [
    { name: 'Potato', type: 'vegetable', quantity: 0, price: 25 },
    { name: 'Apple', type: 'fruit', quantity: 0, price: 150 },
    { name: 'Onion', type: 'vegetable', quantity: 2, price: 40 },
    { name: 'Carrot', type: 'vegetable', quantity: 1, price: 60 },
    { name: 'Banana', type: 'fruit', quantity: 2, price: 50 }
];

let filteredProducts =
    products
    .filter(({ quantity, price }) => quantity > 0 && price < 100)
    .map(({ name }) => name);
console.log('name list of filteredProducts :', filteredProducts);

/*Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'.*/
var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

let filteredUsers =
    users
    .filter(({ admin }) => admin)
    .map(({ id }) => id);
console.log('id list of filteredUsers :', filteredUsers)


/* every()
---------

Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSubmitted'.*/
var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

let hasSubmitted = users.every(({ hasSubmitted }) => hasSubmitted);


/* some()
//--------

Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.*/
var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

let inProgress = requests.some(({ status }) => status === 'pending');
console.log('inProgress ? >> ', inProgress);


/* reduce()
----------
/*Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'. */
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];