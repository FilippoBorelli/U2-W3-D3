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
        data.forEach((book) => {
        const newCol = document.createElement('div')
        newCol.classList.add('col')

        newCol.innerHTML = `
        <div class="card" style="width: 18rem; height: 100">
        <img src="${book.img}" class="card-img-top" alt="img">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Book price: ${book.price}</p>
          <button class="btn btn-primary" id="button">Delete</button>
        </div>
      </div>
        `
        row.appendChild(newCol)
        })
    })
    .catch((err) => {
        console.log("errore", err)
    })
}
getBook()