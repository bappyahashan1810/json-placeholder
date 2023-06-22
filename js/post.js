fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayData(data))

function displayData(data) {
    console.log(data);
    const DivPost = document.getElementById('div-post');
    data.forEach(x => {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h2>User ID - ${x.id}  </h2>
        <h4>Title:${x.title} </h4>
        <p>Post:${x.body}</p>
        `;
        DivPost.appendChild(div);
    })
}