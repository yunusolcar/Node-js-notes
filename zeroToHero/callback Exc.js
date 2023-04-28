const books = [{ //Books için postlar oluşturuldu
     book: 'book 1: ',
     author: 'Jack',
     topic: 'Animals->'
}, {
     book: 'book 2: ',
     author: 'Fatih',
     topic: 'Universe->'
}, {
     book: 'book 3: ',
     author: 'Amie',
     topic: 'Flowers->'
}];

const listBooks = () => { //Books bilgileri listelendi
     books.map(books => {
          console.log(books.book, books.topic, books.author);
     });
};

const addBook = (newBook) => { //Books'a yeni bilgi eklendi
     books.push(newBook);
};
addBook({
     book: 'book 4: ',
     author: 'Châo',
     topic: 'Musics->'
});

listBooks(); //Ekrana yazdırıldı