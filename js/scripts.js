/* 
    Obiettivo: voglio scorrere un array e stampare in console tutti i valori che ci sono all'interno
*/

// const users = [
//     'Angela',
//     'Bernardo',
//     'Chiara',
//     'Daniele',
//     'Elisabetta'
// ];

// // for (let i = 0; i < users.length; i++) {
// //     console.log(users[i]);
// // }

// users.forEach((pippo) => {
//     console.log('pippo:', pippo);
// });

// users.forEach((gino, ciccio) => {
//     console.log('gino:', gino);
//     console.log('ciccio:', ciccio);
// });

// users.forEach((user, i, fullArray) => {
//     console.log('user:', user);
//     console.log('i:', i);
//     console.log('fullArray:', fullArray);
// });

// const cats = [
//     {name: 'Tom', color: 'Gray'},
//     {name: 'Felix', color: 'Black and White'},
//     {name: 'Garfield',color: 'Orange'},
// ];

// cats.forEach((element) => {
//     console.log(element);
    
//     console.log(`
//         ${element.name}'s color is ${element.color}
//     `);
// });

/* 

    -------------------------------------------------------------------------------------------------------------------------

    Obiettivo: voglio, a partire da un array di numeri, creare un altro array contenente il quadrato dei numeri del primo array
*/

// const originalNumbers = [1, 2, 3, 4, 5];

// console.log('originalNumbers:', originalNumbers);

// // const computedNumbers = [];
// // originalNumbers.forEach((num) => {
// //     const squareNum = num * num;

// //     console.log(num, '->', squareNum);

// //     computedNumbers.push(squareNum);
// // });

// const computedNumbers = originalNumbers.map((num) => {
// // const computedNumbers = originalNumbers.map((num, i) => {
// // const computedNumbers = originalNumbers.map((num, i, arr) => {
//     const squareNum = num * num;

//     console.log(num, '->', squareNum);

//     return squareNum;
// });

// /* Per l'obiettivo che ci siamo posti, l'array originale e l'array calcolato avranno SEMPRE la stessa lunghezza */
// console.log(computedNumbers);

/* 

    -------------------------------------------------------------------------------------------------------------------------

    Obiettivo: voglio, a partire da un array di numeri, creare un altro array contenente solo i numeri pari
*/

// const allNumbers = [1, 2, 3, 4, 5];

// console.log('allNumbers:', allNumbers);

// // const evenNumbers = [];
// // for (let i = 0; i < allNumbers.length; i++) {
// //     if (allNumbers[i] % 2 == 0) {
// //         console.log(allNumbers[i] + ' è pari');

// //         evenNumbers.push(allNumbers[i]);
// //     }
// // }

// // const evenNumbers = allNumbers.filter((num) => {
// //     if (num % 2 == 0) {
// //         console.log(num + ' è pari');

// //         return true;
// //     }

// //     return false;
// // });

// // const evenNumbers = allNumbers.filter((num) => {
// //     return num % 2 == 0;
// // });

// const evenNumbers = allNumbers.filter((num) => num % 2 == 0);

// /* Per l'obiettivo che ci siamo posti, non è detto che l'array originale e l'array calcolato abbiano sempre la stessa lunghezza */
// console.log(evenNumbers);

/* 

    -------------------------------------------------------------------------------------------------------------------------

    Obiettivo: voglio creare un oggetto con una serie di chiavi i cui valori sono presi da variabili
*/

// /* 
//     firstName
//     lastName
// */
// const firstName = 'Pippo';
// const lastName = 'Paperino';

// // const myObj = {
// //     firstName: firstName,
// //     lastName: lastName,
// //     email: 'alessio@boolean.careers'
// // };

// const myObj = {
//     firstName,
//     lastName,
//     email: 'alessio@boolean.careers'
// };

// console.log(myObj);

// // const users = [];
// // for (let i = 0; i < 3; i++) {
// //     const firstName = prompt('Nome:');
// //     const lastName = 'Paperino';

// //     // const myObj = {
// //     //     firstName: firstName,
// //     //     lastName: lastName
// //     // };

// //     const myObj = {
// //         firstName,
// //         lastName
// //     };

// //     console.log(myObj);

// //     users.push(myObj);
// // }

// // console.log(users);

/* 

    -------------------------------------------------------------------------------------------------------------------------

    Obiettivo: dato un oggetto contenente una persona, con le chiavi di nome e cognome, creare una funzione che mi restuisce il nome completo
*/

/*
    {
        firstName: 'Alessio',
        lastName: 'Vietri'
    }

    Alessio Vietri
*/

const person = personConstructor('Alessio', 'Vietri');

person.sayHi();

const fullName = person.getFullName();
console.log(fullName);

const personTwo = personConstructor('Alessandro', 'Lodigiani', true);

const personThree = personConstructor('Michele', 'Spiller');

const fullNameTwo = personTwo.getFullName();
console.log(fullNameTwo);

const fullNameThree = personThree.getFullName();
console.log(fullNameThree);

// Definisco la funzione getFullName
// function getFullName(user) {
//     return user.firstName + ' ' + user.lastName;
//     // return user.firstName + ' ' + user['lastName'];
// }

function personConstructor(firstName, lastName, isMillionaire = false) {        // Costruttore
    return {
        firstName: firstName,
        lastName: lastName,
        isMillionaire: isMillionaire,
        sayHi() {
            console.log('Hi!');
        },
        getFullName() {
            console.log(this);
    
            return this.firstName + ' ' + this.lastName;
        }
    };
}