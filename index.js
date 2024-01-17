const getBook = function(){
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
        console.log("response", response)
        if(response.ok){
            return response.json()
        } else {
            if (response.status === 404) {
              throw new Error('404 - Pagina non trovata')
            } else {
              throw new Error('Errore generico')
            }
        }
    })
    .then((data) => {
        console.log("data", data)
        const row = document.getElementById("row")
        data.forEach((book, i) => {
        const newCol = document.createElement('div')
        newCol.classList.add('col')

        newCol.innerHTML = `
        <div class="card" style="width: 18rem; height: 40em">
        <img src="${book.img}" class="card-img-top" style="height: 30em" alt="img">
        <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Prezzo: ${book.price}€</p>
        <button class="btn btn-primary" id="button${i}">Scarta</button>
        </div>
        </div>
        `
        row.appendChild(newCol)

        const buttonDelete = document.getElementById("button" + i)
        buttonDelete.addEventListener("click", function(){
          buttonDelete.closest(".col").remove()
      })
      })
    })
    .catch((err) => {
        console.log("errore", err)
    })
}
getBook()