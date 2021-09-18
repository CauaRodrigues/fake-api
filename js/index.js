fetch('https://my-json-server.typicode.com/CauaRodrigues/fake-api/Livros')
    .then(response => response.json())
    .then(data => showData(data))
    
function showInfoAboutBook(apiName, result) {
    const infoAboutBook = document.getElementById(apiName);
    infoAboutBook.innerText =
                `
                Título:   ${result[apiName]["titulo"]}
                Autor:   ${result[apiName]["autor"]}
                ID:   ${result[apiName]["id"]}
                `;
}

const showData = (result) => {

    for (const Livros in result) {

        showInfoAboutBook(Livros, result)

    }
}