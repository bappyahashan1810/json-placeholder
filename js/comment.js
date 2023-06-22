fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))

function displayComment(data) {
    console.log(data);
    const postDiv = document.getElementById('post-div');
    data.forEach(x => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('comment');
        createDiv.innerHTML = `
        <h4>User-Id : ${x.id}</h4>
        <h1>Name: ${x.name}</h1>
       <p>Comment: ${x.body}</p>
        <i>Email: ${x.email} </i>
        
        `;

        postDiv.appendChild(createDiv);
    })
}