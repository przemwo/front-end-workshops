const users = [
    {
        name: 'Adam',
        surname: 'Nowak',
        age: 20,
        city: 'Gdansk',
    },
    {
        name: 'Adam',
        surname: 'Kowalski',
        age: 40,
        city: 'Gdansk',
    },
    {
        name: 'Anna',
        surname: 'Miodek',
        age: 25,
        city: 'Sopot',
    },
    {
        name: 'Katarzyna',
        surname: 'Kowalska',
        age: 35,
        city: 'Gdynia',
    },
    {
        name: 'Jan',
        surname: 'Polanski',
        age: 45,
        city: 'Sopot',
    },
    {
        name: 'Elzbieta',
        surname: 'Nowak',
        age: 32,
        city: 'Gdansk',
    }
];

// 1. rename data to users
// 2. get new array of users with new user field ('name-surname') - newUsers
    // function as parameter with user argument
    // concatenation
    // template literals
    // destructuring of the user properties
    // object literal property value shorthand (age, city)
    // arrow function + implicit return + implicit return for objects
const newUsers = users.map(({ name, surname, age, city }) => ({
    user: `${name}-${surname}`,
    age,
    city,
}));
console.table(newUsers);

// 3. get new array with all users from Gdansk - usersFromGdansk
    // show filter with function keyword
    // EXCERCISE change function with arrow function, destructuring etc.
    // extract function to variable: filterByGdansk
    // HOF: filterBy city
    // HOF: filterBy any property name
const filterBy = (property) => (value) => ({ [property]: data }) => data === value;
const usersFromGdansk = users.filter(filterBy('city')('Gdansk'));
console.table(usersFromGdansk);

// 4. get new array with users objects from Gdansk with new user property (mix of 1 and 3) - newUsersFromGdansk
    // extract function for map - newUser
    // show that one can chain map and filter
    // should I do map or filter first? which is more efficient?
const newUser = ({ name, surname, age, city }) => ({
    user: `${name}-${surname}`,
    age,
    city,
});
const newUsersFromGdansk = users
    .filter(filterBy('city')('Gdansk'))
    .map(newUser)
console.table(newUsersFromGdansk);

// 5. get new array with number of users in each city - numberOfUsersByCity
// why use typeof? - start counting from 0
const numberOfUsersByCity = users.reduce((acc, { city }) => {
    if (typeof acc[city] === 'undefined') {
        acc[city] = 1;
    } else {
        acc[city]++;
    }
    return acc;
}, {});
console.table(numberOfUsersByCity);

// 6. sort users by age descending - mutation!!!
// use destructuring and aliases
users.sort(({ age: ageA }, { age: ageB }) => ageB - ageA);
console.table(users);
