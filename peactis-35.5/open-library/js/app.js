const seaerchBtn = () => {
    const inputValue = document.getElementById('input-value').value
    document.getElementById('input-value').value = ''
    const url = `https://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
}

const displayBook = books => {
    console.log(books);
    const allBook = document.getElementById('all-books')
    books.forEach(book => {
        const bookArea = document.createElement('div')
        bookArea.classList.add('book-area')
        const bookDiv = document.createElement('div')
        bookDiv.classList.add('book')
        bookArea.appendChild(bookDiv)
        bookDiv.innerHTML = `
                        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
                        <h3>${book.title}</h3>
                        <h5>Author: ${book.author_name}</h5>
                        <h5>Publish: ${book.first_publish_year}</h5>
`

        allBook.appendChild(bookArea)

    });
}