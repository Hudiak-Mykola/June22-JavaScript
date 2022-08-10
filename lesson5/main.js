
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square = (a,b) => a*b;
// console.log(square(10,17))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squsreCicle(pi, r) {
//     let rez = pi * (r**2)
//   return  (rez)
// }
// console.log(squsreCicle(3.14,8))
// - створити функцію яка приймає масив та виводить кожен його елемент
// let something = [1,2,'string','some',99]
// function arrayShow(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// arrayShow(something)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// T = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor ex fuga fugit ipsam libero necessitatibus omnis quasi sit soluta.`;
// function createParagraph(text) {
//     document.write(`<p>${text}</p>`)
// }
// createParagraph(T)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let x = [1, 2, 3];
// let sms = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
// function create_3li_in_ul(text) {
//     document.write(`<ul>`)
//     for (const xElement of x) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// create_3li_in_ul(sms)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let txt = `Lorem ipsum dolor sit amet.`
// function create_ul(text, x) {
//         document.write(`<ul>`)
//           for (let i=0; i<=x; i++) {
//               document.write(`<li>${text}</li>`)
//           }
//         document.write(`</ul>`)
// }
// create_ul(txt,10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let elements = [1, 'milk', true, 75, false, 'egg'];
// function arrayList(array) {
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
// }
// arrayList(elements)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//         {id:1, name: 'vasya', age: 31},
//         {id:2, name: 'petya', age: 30, },
//         {id:3, name: 'kolya', age: 29},
//         {id:4, name: 'olya', age: 28},
//         {id:5, name: 'max', age: 30},
//         {id:6, name: 'anya', age: 31},
//         {id:7, name: 'oleg', age: 28},
//         {id:8, name: 'andrey', age: 29},
//         {id:9, name: 'masha', age: 39},
//         {id:10, name: 'olya', age: 31},
//         {id:11, name: 'max', age: 31},
//     ];
// function arrayObjects(array) {
//     for (const arrayElement of array) {
//         document.write(`<div class="post-card">`)
//         for (const arrayElementKey in arrayElement) {
//             document.write(`${arrayElementKey} - ${arrayElement[arrayElementKey]}`)
//         }
//         document.write(`</div>`)
//     }
// }
// arrayObjects(users)

// - створити функцію яка повертає найменьше число з масиву
// let massive = [9, 99, 8, 7, -9, 10];
// function foo(arr) {
//     let min = arr[0];
//     for (let number of arr) {
//         if (min > number) {
//             min = number;
//         }
//     }
//
//     return min;
// }
//
// console.log(foo(massive))


// sortArray(massive)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let massive = [2, 8, 6, 78, 90, 24, 4, 5, 7675, 23,];
function arraySum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      // debugger
    }
    console.log(sum)
}
arraySum(massive);