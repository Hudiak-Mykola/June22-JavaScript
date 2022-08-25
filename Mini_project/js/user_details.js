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

fetch(`https://jsonplaceholder.typicode.com/users/${id}/`)
    .then(response => response.json())
    .then(user => {
            let divUserCard = document.createElement('div')
            divUserCard.classList.add('user_card')
            divUserCard.innerText = `id: ${user.id}
             name: ${user.name}
             username: ${user.username}
             email: ${user.email}
             phone: ${user.phone}
             
             address:
             
             street: ${user.address.street}
             suite: ${user.address.suite}
             city: ${user.address.city}
             zipcode: ${user.address.zipcode}
             
             geo:
             
             lat: ${user.address.geo.lat}
             lng: ${user.address.geo.lng}
             
             company:
             
             bs: ${user.company.bs}
             catchPhrase ${user.company.catchPhrase}
             name: ${user.company.name}`
            mainDiv.appendChild(divUserCard)

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
                    }})}})





