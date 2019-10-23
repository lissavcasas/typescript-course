const getBooks = () => {
    let arrBooks = [
        { title: 'Ulises', author: 'James Joyce', available: true },
        { title: 'El viejo y el mar', author: 'Ernest Hemingway', available: false },
        { title: 'El gato negro', author: 'Edgar Allan Poe', available: true }
    ];
    return arrBooks;
};
const logFirstAvailable = (arrBooks) => {
    let numberOfBooks = arrBooks.length;
    let firstAvailable = '';
    for (let currentBook of arrBooks) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('total', numberOfBooks);
    console.log('fist available', firstAvailable);
};
const getArrBooks = getBooks();
console.log('result', getArrBooks);
//console.log(logFirstAvailable(getArrBooks));
//console.log(logFirstAvailable());
