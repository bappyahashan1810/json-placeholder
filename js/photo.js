fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))

function displayPhoto(data) {
    console.log(data);
    const divPhoto = document.getElementById('photo-div');
    data.forEach(x => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('photo')
        newDiv.innerHTML = `
        <h4> Id: ${x.id} </h4>
        <p> Title: ${x.title} </p>
        <img src='${x.url}' >
        
        `;
        divPhoto.appendChild(newDiv);
    })
}