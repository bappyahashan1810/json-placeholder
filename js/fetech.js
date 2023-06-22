function userBtn() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));
}
function displayUser(data) {
    const addUser = document.getElementById('add-user');
    const addEmail = document.getElementById('add-email');
    data.forEach(element => {
        console.log(element);
        const li = document.createElement('li');
        li.innerText = element.name;
        addUser.appendChild(li);
    });
    data.forEach(x => {
        const li1 = document.createElement('p');
        li1.innerText = x.email;
        addEmail.appendChild(li1);
    });
}
