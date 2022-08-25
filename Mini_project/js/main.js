// В index.html
// 1 отримати масив об'єктів user з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного користувача.
// 3 Додати кожному блоку кнопку/посилання , при натисканні на яку відбувається перехід на сторінку user-details.html, яка має детальну інформацію про об'єкт, на який клікнули

let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv')
document.body.appendChild(mainDiv)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(user => {

        let div = document.createElement('div')
        div.classList.add('user_cards')
        div.innerText = `${user.id} - ${user.name}`
        mainDiv.appendChild(div)

        let btn = document.createElement('button')
        btn.classList.add('user')
        btn.innerText = 'User info'
        div.appendChild(btn)

        btn.onclick = function () {
            window.location.href=`user-details.html?id=${user.id}`
        }
    }));



// Стилізація проекту -
// index.html - всі блоки з user - по 2 до ряду. кнопки/посилання перебувають під інформацією про user.
//     user-details.html - блок з інформацією про user вгорі сторінки. Кнопка нижче на 90% ширини сторінки по центру.
//     блоки з короткою інформацією про post - в ряд по 5 об'єктів.
// post-details.html - блок з інформацією про пост зверху. Коментарі – по 4 в ряд.
//     Всі без винятку елементи, що характеризують user,post,comment візуалізувати, так, щоб було видно їх блоки (дати задній фон + margin. Іншими словами - вкрай чітка сітка)



