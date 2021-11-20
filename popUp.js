function readedBook(id) {
    let konfirmasi = confirm("Pindahkan buku ke rak [SELESAI DIBACA] ?");

    if (konfirmasi == true) {
        const dataBukuDetail = getData().filter(a => a.id == id);
        const newBook = {
            id: dataBukuDetail[0].id,
            title: dataBukuDetail[0].title,
            author: dataBukuDetail[0].author,
            year: dataBukuDetail[0].year,
            isBerhasil: true
        }

        const dataBuku = getData().filter(a => a.id != id);
        localStorage.setItem(localStorageKey,JSON.stringify(dataBuku));

        insertData(newBook);
    }else{
        return 0;
    }
}

function unreadedBook(id) {
    let konfirmasi = confirm("Pindahkan buku ke rak [BELUM SELESAI DIBACA] ?")

    if (konfirmasi == true) {
        const dataBukuDetail = getData().filter(a => a.id == id);
        const newBook = {
            id: dataBukuDetail[0].id,
            title: dataBukuDetail[0].title,
            author: dataBukuDetail[0].author,
            year: dataBukuDetail[0].year,
            isBerhasil: false
        }

        const dataBuku = getData().filter(a => a.id != id);
        localStorage.setItem(localStorageKey,JSON.stringify(dataBuku));

        insertData(newBook);
    }else{
        return 0;
    }
}