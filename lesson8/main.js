// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
//
// let arr = [];
// arr.push(new User(1, 'Kolia', 'Hudiak', 'nick@gmail.com', 489023849));
// arr.push(new User(3,'Vasia', 'Fedoliak','sdjksa@gmai.com', 8972376))
// arr.push(new User(4,'Mykola', 'Ladaniak','tktr@gmai.com', 9871289))
// arr.push(new User(5,'Artem', 'Popov','euhjg@gmai.com', 394857))
// arr.push(new User(6,'Maksym', 'Fedoliak','oir@gmai.com', 7836428))
// arr.push(new User(2,'Katia', 'Surko','eqpojqf@gmai.com', 2657856))
// arr.push(new User(7,'Roman', 'Chopyk','oija@gmai.com', 3847297))
// arr.push(new User(8,'Vlad', 'Kokos','psdkl@gmai.com', 12341897))
// arr.push(new User(9,'Veronika', 'Bura','sdklma@gmai.com', 314566788))
// arr.push(new User(10,'Andriy', 'Prost','ealkg@gmai.com', 74836573))
// console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//  let filter = arr.filter(array => array.id % 2 === 0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arr.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname , email, phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arr = [];
// arr.push(new Client(1,'Vasia','Kroha','asjn@gmail.com',4532311,['phone','scaner']));
// arr.push(new Client(1, 'Kolia', 'Hudiak', 'nick@gmail.com', 489023849,['asf','fwewef','wwefs']));
// arr.push(new Client(3,'Vasia', 'Fedoliak','sdjksa@gmai.com', 8972376,['dfsf']))
// arr.push(new Client(4,'Mykola', 'Ladaniak','tktr@gmai.com', 9871289,['adfsd','FEFEFEW','afdqwqw','wdsa']))
// arr.push(new Client(5,'Artem', 'Popov','euhjg@gmai.com', 394857,['qwd','wdwd']))
// arr.push(new Client(6,'Maksym', 'Fedoliak','oir@gmai.com', 7836428,['dw','dwqefeq','qwdqfq','QDQdwfd','sefwefewf','wefewf']))
// arr.push(new Client(2,'Katia', 'Surko','eqpojqf@gmai.com', 2657856,['asda','afafa','aaa']))
// arr.push(new Client(7,'Roman', 'Chopyk','oija@gmai.com', 3847297,['afdsf']))
// arr.push(new Client(8,'Vlad', 'Kokos','psdkl@gmai.com', 12341897,['asfdas','asdfaseqwdf','gfhg','jdvsgh','ghavdgh','sdhv','hsvd']))
// arr.push(new Client(9,'Veronika', 'Bura','sdklma@gmai.com', 314566788,['asjn','kjafsdh']))
// console.log(arr)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(arr.sort((a,b) => a.order.length - b.order.length))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(модель, виробник, рік_випуску, максимальна_швидкість, обʼєм_двигуна) {
//     this.модель = модель;
//     this.виробник = виробник;
//     this.рік_випуску = рік_випуску;
//     this.максимальна_швидкість = максимальна_швидкість;
//     this.обʼєм_двигуна = обʼєм_двигуна
// }
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// let car1 = new Car('Golf','Volkswagen',2000, 200, 1.2)
// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.максимальна_швидкість} на годину`)
// }
// car1.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// let car2 = new Car('Golf','Volkswagen',2000, 200, 1.2)
// Car.prototype.info = function () {
//     console.log(`модель - ${this.модель}\n` +
//         `виробник - ${this.виробник}\n` +
//         `рік_випуску - ${this.рік_випуску}\n` +
//         `максимальна_швидкість - ${this.максимальна_швидкість}\n` +
//         `обʼєм_двигуна - ${this.обʼєм_двигуна}`);
// }
// car2.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// let car3 = new Car('Golf','Volkswagen',2000, 200, 1.2)
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//    let rez = this.максимальна_швидкість + newSpeed
//     console.log(rez)
// }
// car3.increaseMaxSpeed(50)

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// let car4 = new Car('Golf','Volkswagen',2000, 200, 1.2)
// Car.prototype.changeYear = function (newValue) {
//     let rez = this.рік_випуску = newValue;
//     console.log(rez)
// }
// car4.changeYear(1998)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// let car5 = new Car('Golf','Volkswagen',2000, 200, 1.2)
// Car.prototype.addDriver = function (водій) {
// let asd = {...car5,водій}
//     console.log(asd)
// }
// car5.addDriver({name: 'Tolia', age: 28})

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class Avtomobil {
//     constructor(модель, виробник, рік_випуску, максимальна_швидкість, обʼєм_двигуна) {
//         this.модель = модель;
//         this.виробник = виробник;
//         this.рік_випуску = рік_випуску;
//         this.максимальна_швидкість = максимальна_швидкість;
//         this.обʼєм_двигуна = обʼєм_двигуна
//
//     }
// }
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// let avtomobil1 = new Avtomobil('Golf','Volkswagen',2000, 200, 1.2);
// Avtomobil.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.максимальна_швидкість} на годину`)
// }
// avtomobil1.drive()
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
// let avtomobil2 = new Avtomobil('Golf','Volkswagen',2000, 200, 1.2)
// Avtomobil.prototype.info = function () {
//     console.log(`модель - ${this.модель}\n` +
//         `виробник - ${this.виробник}\n` +
//         `рік_випуску - ${this.рік_випуску}\n` +
//         `максимальна_швидкість - ${this.максимальна_швидкість}\n` +
//         `обʼєм_двигуна - ${this.обʼєм_двигуна}`);
// }
// avtomobil2.info()
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// let avtomobil3 = new Avtomobil('Golf','Volkswagen',2000, 200, 1.2)
// Avtomobil.prototype.increaseMaxSpeed = function (newSpeed) {
//    let rez = this.максимальна_швидкість + newSpeed
//     console.log(rez)
// }
// avtomobil3.increaseMaxSpeed(50)
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// let avtomobil4 = new Avtomobil('Golf','Volkswagen',2000, 200, 1.2)
// Avtomobil.prototype.changeYear = function (newValue) {
//     let rez = this.рік_випуску = newValue;
//     console.log(rez)
// }
// avtomobil4.changeYear(1998)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// let avtomobil5 = new Avtomobil('Golf','Volkswagen',2000, 200, 1.2)
// Avtomobil.prototype.addDriver = function (водій) {
//     let asd ={...avtomobil5,водій}
//     console.log(asd)
// };
//     avtomobil5.addDriver({name: 'vasia', age: 34})
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Popelushka {
//     constructor(імʼя, вік, розмір_ноги) {
//         this.імʼя = імʼя;
//         this.вік = вік;
//         this.розмір_ноги = розмір_ноги;
//     }
// }
//
// let arr = [];
// arr.push(new Popelushka('Anna', 17, 32))
// arr.push(new Popelushka('Olia', 19, 33))
// arr.push(new Popelushka('Ira', 23, 34))
// arr.push(new Popelushka('Nika', 18, 35))
// arr.push(new Popelushka('Vika', 27, 36))
// arr.push(new Popelushka('Inna', 29, 37))
// arr.push(new Popelushka('Halia', 17, 38))
// arr.push(new Popelushka('Veronika', 16, 39))
// arr.push(new Popelushka('Masha', 25, 40))
// arr.push(new Popelushka('Katia', 22, 41))
// console.log(arr);
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince {
//     constructor(імʼя, вік, туфелька_яку_він_знайшов) {
//         this.імʼя = імʼя;
//         this.вік = вік;
//         this.туфелька_яку_він_знайшов = туфелька_яку_він_знайшов;
//     }
// }
// let prince = new Prince('Roman', 28, 39)
// let asd = [];
// asd.push(prince.туфелька_яку_він_знайшов)
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// function choice(array) {
//     for (const arrayElement of array) {
//         if (arrayElement.розмір_ноги === asd[0]) {
//             console.log(arrayElement);
//         }
//     }
//     }
// choice(arr)
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function choiceMethodFind(array) {
//     return array.розмір_ноги === asd[0];
// }
// console.log(arr.find(choiceMethodFind))

//