 // На сторінці user-details.html:
// 4 Вивести всю, без винятку, інформацію про об'єкт user на кнопку/посилання якого було здійснено клік раніше.
// 5 Додати кнопку "post of current user", при натисканні на яку, з'являються title всіх постів поточного користувача
// (Для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Кожному посту додати кнопку/посилання, при натисканні на яку відбувається перехід на сторінку post-details.html, яка має детальну інформацію про поточний пост.

let url =new URL(location.href);
let  id = url.searchParams.get('id');


let mainDiv = document.createElement('div');
mainDiv.classList.add('mainUserInfo')
document.body.appendChild(mainDiv)

 let divUserCard = document.createElement('div')
 divUserCard.classList.add('user_card')
 mainDiv.appendChild(divUserCard)

 let divInform = document.createElement('div')
 divInform.classList.add('inform')
 divInform.innerText = 'USER INFORMATION:'
 divUserCard.appendChild(divInform)

 let divAddress = document.createElement('div')
 divAddress.classList.add('address')
 divAddress.innerText = 'ADDRESS:'
 divUserCard.appendChild(divAddress)

 let divGeo = document.createElement('div')
divGeo.classList.add('geo')
 divGeo.innerText = 'GEO:'
 divUserCard.appendChild(divGeo)

 let divCompany = document.createElement('div')
 divCompany.classList.add('company')
 divCompany.innerText = 'COMPANY:'
 divUserCard.appendChild(divCompany)

fetch(`https://jsonplaceholder.typicode.com/users/${id}/`)
    .then(response => response.json())
    .then(user => {
        for (const userKey in user) {
            console.log(user)
            if (typeof user[userKey] !== 'object') {
                let p = document.createElement('p')
                p.classList.add('some')
                p.innerText = `${userKey} - ${user[userKey]}`
                divInform.appendChild(p)
            }

        }
        for (const Key in user.address) {
            if (typeof user.address[Key] !== 'object') {
                let p = document.createElement('p')
                p.classList.add('some')
                p.innerText = `${Key} - ${user.address[Key]}`
                divAddress.appendChild(p)
            }
        }
        for (const Key in user.address.geo) {
            if (typeof user.address.geo[Key] !== 'object') {
                let p = document.createElement('p')
                p.classList.add('some')
                p.innerText = `${Key} - ${user.address.geo[Key]}`
                divGeo.appendChild(p)
            }
        }
        for (const Key in user.company) {
            if (typeof user.company[Key] !== 'object') {
                let p = document.createElement('p')
                p.classList.add('some')
                p.innerText = `${Key} - ${user.company[Key]}`
                divCompany.appendChild(p)
            }
        }



        let btnPosts = document.createElement('button')
        btnPosts.innerText = 'post of current user'
        btnPosts.classList.add('postList')
        mainDiv.appendChild(btnPosts)

        btnPosts.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts/`)
                .then(response => response.json())
                .then(posts => {
                    let divMainPost = document.createElement('div')
                    divMainPost.classList.add('main_post')
                    mainDiv.appendChild(divMainPost)

                    for (const post of posts) {
                        let divPost = document.createElement('div')
                        divPost.classList.add('post')
                        divPost.innerText = `${post.title}`
                        divMainPost.appendChild(divPost)

                        let btnPostInfo = document.createElement('button')
                        btnPostInfo.innerText = 'Post information'
                        divPost.appendChild(btnPostInfo)

                        btnPostInfo.onclick = function () {
                            window.location.href=`post-details.html?id=${post.id}`
                        }
                    }



                })
            }})





