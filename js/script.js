fetch('https://my-json-server.typicode.com/CauaRodrigues/fake-api/Livros')
.then(response => response.json())
.then(json => {
    const div = document.getElementById("content");
    div.innerText = JSON.stringify(json)

});