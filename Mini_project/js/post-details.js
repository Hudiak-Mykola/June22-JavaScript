//     На сторінці post-details.html:
// 7 Вивести всю, без винятку, інформацію про об'єкт post на кнопку/посилання якого було здійснено клік раніше.
// 8 Нижче інформації про пост, вивести всі коментарі поточного посту (ендпоінт для отримання інформації - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let mainDiv = document.createElement('div')
mainDiv.classList.add('main')
document.body.appendChild(mainDiv)

let url =new URL(location.href);
let  id = url.searchParams.get('id');

let  divP = document.createElement('div')
divP.classList.add('info')
mainDiv.appendChild(divP)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then(response => response.json())
    .then(postInfo => {
        console.log(postInfo)
        for (const postInfoKey in postInfo) {

            let p = document.createElement('p')
            p.innerText = `${postInfoKey}: ${postInfo[postInfoKey]}`
            divP.appendChild(p)
        }

    })

let coments = document.createElement('div')
coments.classList.add('coments')
coments.innerText = 'Post coments:'
mainDiv.appendChild(coments)

let divComent = document.createElement('div');
divComent.classList.add('mainComent')
mainDiv.appendChild(divComent);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(coments => {
        console.log(coments)
        for (const coment of coments) {

            let div = document.createElement('div')
            div.classList.add('coment')
            div.innerText = `${coment.body}`
            divComent.appendChild(div)

        }

    })