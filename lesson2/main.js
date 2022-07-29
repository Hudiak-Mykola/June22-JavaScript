// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array1 = [123, 'Hudiak', 'Mykola', 'Fedorovych', 10, 7, 1994, 'Wolksvagen', 'Okten', true];
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log(array1[6]);
console.log(array1[7]);
console.log(array1[8]);
console.log(array1[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'День, що навчив мене жити',
    pageCount: 288,
    genre: "Саморозвиток"
}
console.log(book1)
let book2 = {
    title: 'Чорний ворон',
    pageCount: 432,
    genre: 'Історичний роман'
}
console.log(book2)
let book3 = {
    title: 'Бог завжди подорожує інкогніто',
    pageCount: 418,
    genre: 'Сучасна література'
}
console.log(book3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
//     Кожен автор має поля name,age

let object1 = {
    title: 'Момент еврики',
    pageCount: 368,
    genre: 'Саморозвиток',
    authors: [
        {name: 'Джон Куніос', age: 34},
        {name: 'Марк Біман', age: 40}
    ]
}
console.log(object1.authors[1].name);

let object2 = {
    title: 'Прості речі',
    pageCount: 264,
    genre:'Біографія',
    authors: [
        {name:'Тетяна Терен', age: 28},
        {name:'Анна Липківська', age:30}
    ]
}
console.log(object2.authors[0].age);
let object3 = {
    title: 'То є Львів. Колекція міських історій',
    pageCount: 240,
    genre: 'Сучасна проза',
    authors: [
        {name: "Мар'яна Савка", age:41},
        {name: 'Юрій Андрухович', age:50},
        {name: 'Маріана кіяновська', age:30},
        {name:'Галина Вдовиченко', age: 25},
        {name: 'Констянтин Москалець', age: 45},
        {name: 'Віктор Морозов', age: 48}
    ]
}
console.log(object3.authors[4].name)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль ' +
// 'пароль кожного користувача

let users = [
    {name: 'Mykola', username: 'Nick', password: "134839jks2"},
    {name: 'Andriy', username: 'Чорний', password: 'b4kb93b0'},
    {name: 'Artem', username: 'Довгий', password: 'niqwue924209'},
    {name: 'Maksym', username: 'Привид', password: 'abq3389u4'},
    {name: 'Vasyl', username: 'Габка', password: '5jkn9w45325lk'},
    {name: 'Vasyl', username: 'Зацвилий', password: '904kzf58933j'},
    {name: 'Nazar', username: 'Феник', password: 'r09905kl9325fsl'},
    {name: 'Kolia', username: 'Бойко', password: 'xjk5894kl'},
    {name: 'Vasia', username: 'Голова', password: '9987ewjn23'},
    {name: 'Sofia', username: 'Карета', password: 'sf893356n'},

]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

