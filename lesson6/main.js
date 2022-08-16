// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 ='hello world'
// // console.log(str1.length)
// let str2 ='lorem ipsum'
// // console.log(str2.length)
// let str3 ='javascript is cool'
// // console.log(str3 .length)
// const lenght = str => console.log(str.length)
// lenght(str1)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 ='hello world'
// console.log(str1.toUpperCase())
// let str2 ='lorem ipsum'
// console.log(str2.toUpperCase())
// let str3 ='javascript is cool'
// console.log(str3.toUpperCase())
// const toUpperCase = str => console.log(str.toUpperCase());
// toUpperCase(str1)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WOLD';
// console.log(str1.toLowerCase())
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase())
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase())
// const toLowerCase = str => console.log(str.toLowerCase());
// toLowerCase(str1)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// function iterateString(str) {
//     for (let i = 0; i < str.length; i++) {
//         const strElement = str[i];
//         console.log(strElement,`${i}`)
//     }
// }
// iterateString(str)
// console.log(str.substring(1,13))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// function stringToarray(array) {
//     console.log(array.split(' '))
// }
// stringToarray(str)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(array => array + ''))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// function sortNums(nums,direction) {
//     if (direction === 'ascending') {
//         nums.sort(function (a,b) {
//             return a - b;
//         })
//     } else if (direction === 'descending') {
//         nums.sort(function (a,b) {
//             return b - a;
//         })
//     }
//     console.log(nums);
// }
// sortNums(nums,'descending')

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((duration1,duration2)=>duration2.monthDuration-duration1.monthDuration)
// console.log(coursesAndDurationArray)
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let mcc = courses => {
//     if (courses.monthDuration > 5) {
//         console.log(courses)
//     }
// }
// coursesAndDurationArray.forEach(mcc)
// // За допомогою стрілочної функції
// let sort = coursesAndDurationArray.filter(arrray => arrray.monthDuration > 5);
// console.log(sort)


// описати колоду карт
// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 2, color:'black'},
//     {cardSuit: 'clubs', value: 3, color:'black'},
//     {cardSuit: 'clubs', value: 4, color:'black'},
//     {cardSuit: 'clubs', value: 5, color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 2, color:'red'},
//     {cardSuit: 'diamonds', value: 3, color:'red'},
//     {cardSuit: 'diamonds', value: 4, color:'red'},
//     {cardSuit: 'diamonds', value: 5, color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 2, color:'red'},
//     {cardSuit: 'hearts', value: 3, color:'red'},
//     {cardSuit: 'hearts', value: 4, color:'red'},
//     {cardSuit: 'hearts', value: 5, color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 2, color:'black'},
//     {cardSuit: 'spades', value: 3, color:'black'},
//     {cardSuit: 'spades', value: 4, color:'black'},
//     {cardSuit: 'spades', value: 5, color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},
//
// ];
// - знайти піковий туз
// let add = function add (array) {
//     if (array.value === 'Ace' && array.cardSuit === 'clubs') {
//         console.log(array)
//     }
// }
// cards.forEach(add)
// За допомогою стрілочної функції
// let arr = cards.filter (array => array.value === 'Ace' && array.cardSuit === 'clubs')
// console.log(arr)
// // - всі шістки
// let sdd = function (array) {
//     if (array.value === 6) {
//         console.log(array)
//     }
// }
// cards.forEach(sdd)
// За допомогою стрілочної функції
// let six = cards.filter(array => array.value === 6);
// console.log(six);
// - всі червоні карти
// let ghh = function (array) {
//     if (array.color === 'red') {
//         console.log(array)
//     }
// }
// cards.forEach(ghh)
// За допомогою стрілочної функції
// let red = cards.filter(array => array.color === 'red');
// console.log(red)
// // - всі буби
// let dd = function (array) {
//     if (array.cardSuit === 'diamonds') {
//         console.log(array)
//     }
// }
// cards.forEach(dd)
// За допомогою стрілочної функції
// let diamonds = cards.filter(array => array.cardSuit === 'diamonds');
// console.log(diamonds)
// - всі трефи від 9 та більше
// let ff = function (array) {
//     if (array.cardSuit === 'clubs' && array.value >=9) {
//         console.log(array)
//     }else if (array.cardSuit === 'clubs' && array.value === 'Ace') {
//         console.log(array)
//     }else if (array.cardSuit === 'clubs' && array.value === 'King') {
//         console.log(array)
//     }else if (array.cardSuit === 'clubs' && array.value === 'Queen') {
//         console.log(array)
//     }else if (array.cardSuit === 'clubs' && array.value === 'Jack') {
//         console.log(array)
//     }
// }
//     cards.forEach(ff)
// //
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let sort = cards.reduce(function (accumulator, card) {
//     if (card.cardSuit === 'spades') {
//         accumulator.spades.push(card)
//     }else if (card.cardSuit === 'diamonds') {
//         accumulator.diamonds.push(card)
//     }else if (card.cardSuit === 'hearts') {
//         accumulator.hearts.push(card)
//     }else if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(card)
//     }
//     return accumulator;
// },{spades:[], diamonds:[], hearts:[], clubs:[]});
// console.log(sort)


