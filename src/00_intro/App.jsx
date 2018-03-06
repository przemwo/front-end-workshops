import React from 'react';

const App = () => <h1>00 Intro</h1>;
export default App;


const data = [
    {
        name: 'Adam',
        surname: 'Nowak',
        age: 20,
        city: 'Gdansk'
    },
    {
        name: 'Adam',
        surname: 'Kowalski',
        age: 40,
        city: 'Gdansk'
    },
    {
        name: 'Anna',
        surname: 'Miodek',
        age: 25,
        city: 'Sopot'
    },
    {
        name: 'Katarzyna',
        surname: 'Kowalska',
        age: 35,
        city: 'Gdynia'
    },
    {
        name: 'Jan',
        surname: 'Polanski',
        age: 45,
        city: 'Sopot'
    },
    {
        name: 'Elzbieta',
        surname: 'Nowak',
        age: 32,
        city: 'Gdansk'
    }
];

// ZADANIA

// 1. Lista uzytkownikow z polem `user` (imie + nazwisko) oraz `age` (template literals)
// const users = data.map(user => {
//     return {
//         user: `${user.name} ${user.surname}`,
//         age: user.age
//     };
// });
// console.log(users);

// 2. Lista uzykownikow z Gdanska
// const users = data.filter(user => user.city === 'Gdansk');
// console.log(users);

// 3. Lista uzytkownikow wg wybranego pola i wartosci (higher-order functions)
// const filterBy = (field, value) => (data) => data[field] === value;
// const users = data.filter(filterBy('city', 'Gdansk'));
// console.log(users);

// 4. Lista uzytkownikow wg wybranego pola i wartosci (partial application)
// const filterBy = (field) => (value) => (data) => data[field] === value; // 1.
// const filterByCity = filterBy('city'); // 2.
// const filterByCityGdansk = filterByCity('Gdansk'); // 3. <= czy warto?
// // const users = data.filter(filterByCityGdansk);
// const users = data.filter(filterByCity('Sopot')); // moze lepiej tak?
// console.log(users);

// 5. Posortuj uzytkownikow wg wieku malejaco (destructuring)
// const usersSorted = data.sort(({ age: ageA }, { age: ageB }) => ageB - ageA);
// console.log(usersSorted);

// 6. Zwroc obiekt zliczajacy liczbe osob w poszczegolnych miastach
// const counter = data.reduce((acc, user) => {
//     const city = user.city;
//     if(typeof acc[city] === 'undefined') {
//         acc[city] = 1;
//     } else {
//         acc[city] += 1;
//     }
//     return acc;
// }, {});
// console.log(counter);

// 6. bind(this)
// const foo = {
//     counter: 100,
//     logCounter: function() {
//         console.log(this.counter);
//     }
// };
// foo.logCounter();
// setTimeout(foo.logCounter, 1000);

// 7. bind(null, var)
// function foo(a) {
//     console.log(a);
// }
// const bar = foo;
// bar();
// const baz = foo.bind(null, 'Hello world!');
// baz();

// 8. Data mutation! (nested object)
// const arr = [1, 2, 3, 4, 5];
// const newArr = [...arr];
// console.log(newArr);
// newArr[0] = 999;
// console.log(newArr);
// console.log(arr);

// const users = [...data];
// users[0].name = 'ups!';
// console.log(users);
// console.log(data);