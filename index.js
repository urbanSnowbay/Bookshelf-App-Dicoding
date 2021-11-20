function deleteBook(id) {
    let konfirmasi = confirm("Apakah Anda yakin ingin menghapus data buku ini ?");

    if (konfirmasi == true) {
        const dataBukuDetail = getData().filter(a => a.id == id);
        const dataBuku = getData().filter(a => a.id != id);
        localStorage.setItem(localStorageKey,JSON.stringify(dataBuku));
        showData(getData());
        alert(`Buku ${dataBukuDetail[0].title} telah dihapus dari rak`);
    }else{
        return 0;
    }
}

function insertData(book) {
    let dataBuku = [];

    if (!localStorage.getItem(localStorageKey)) {
        alert(`Data buku gagal ditambahkan`);
        localStorage.setItem(localStorageKey, 0);
    }else{
        alert(`Data buku berhasil ditambahkan`);
        dataBuku = JSON.parse(localStorage.getItem(localStorageKey));
    }

    dataBuku.unshift(book);
    localStorage.setItem(localStorageKey,JSON.stringify(dataBuku));

    showData(getData());
}

function getData() {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}

function showData(books = []) {
    const tidakBerhasil = document.querySelector("#incompleteBookshelfList");
    const berhasil= document.querySelector("#completeBookshelfList");

    tidakBerhasil.innerHTML = '';
    berhasil.innerHTML = '';

    books.forEach(book => {
        if (book.isBerhasil == false) {
            let oi = `
            <article class="book_item">
                <h3 style="text-align:justify;">${book.title}</h3>
                <p style="text-align:justify;">Penulis: ${book.author}</p>
                <p>Tahun: ${book.year}</p>

                <div class="action" style="margin-top: 30px;">
                    <button class="green" onclick="readedBook('${book.id}')">
                        <span>Selesai dibaca</span>
                    </button>
                    <button class="red" onclick="deleteBook('${book.id}')">
                        <span>Hapus buku</span>
                    </button>
                </div>
            </article>
            `

            tidakBerhasil.innerHTML += oi;
        }else{
            let oi = `
            <article class="book_item">
                <h3 style="text-align:justify;">${book.title}</h3>
                <p style="text-align:justify;">Penulis: ${book.author}</p>
                <p>Tahun: ${book.year}</p>

                <div class="action" style="margin-top: 30px;">
                    <button class="green" onclick="unreadedBook('${book.id}')"> 
                        <span>Belum selesai dibaca</span>
                    </button>
                    <button class="red" onclick="deleteBook('${book.id}')">
                        <span>Hapus buku</span>
                    </button>
                </div>
            </article>
            `
            berhasil.innerHTML += oi;
        }
    });
}