// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let hjg = 'meni важко вчитися бо тупий'
//
// function capitalize(str) {
//     let arr = str.split( ' ')
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         let slice = arrElement.slice(0, 1);
//         let rez = arrElement.replace(slice, slice.toUpperCase())
//         document.write(rez.concat( ' '))
//     }
// }
// capitalize(hjg)
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// function cutString(str,n) {
//     let asd = []
//     for (let i = 0; i < str.length; i = i+n) {
//        asd.push(str.substr(i, n))
//     }
//     return asd;
// }
// console.log(cutString('насолода', 3));


// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


// let string = 'Цього тижня я старанно вчився'
// function delete_characters(str, length) {
//         console.log(string.substr(0, length));
// }
// delete_characters(string, 9)



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let string = 'ревуть воли, як ясла повні'
// const insert_dash = str => {
//     let asd = str.split(' ');
//     for (const asdElement of asd) {
//         document.write(asdElement.concat('-').toUpperCase())
//     }
// };
// insert_dash(string)


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let string = 'сьогодні субота і падає дощ'
// function toUpper(str) {
//     console.log(str.replace(str[0], str[0].toUpperCase()));
// }
// toUpper(string)

