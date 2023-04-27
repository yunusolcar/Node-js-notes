// Node.js  - Callback
const function1 = () => {
     console.log("Function 1 working");
     function3();
};

const function2 = () => {
     console.log("Function 2 working")
};
const function3 = () => {
     console.log("Function 3 working")
     function2();
};

function1();
/* Result
Function 1 working
Function 3 working
Function 2 working
*/

//Callback ile function içinde function çağırabildik.
//Senkron olarak çalıştı. Çünkü js single thread.


const books = [{
          name: 'Book 1',
          author: 'Author A'
     }, {
          name: 'Book 2',
          author: 'Author B'
     }, {
          name: 'Book 3',
          author: 'Author C'
     }

];

const listBooks = () => {
     books.map(book => {
          console.log(book.name);
     })
};

//listBooks();
/* Result
Book 1
Book 2
Book 3 */

const addBook = (newBook) => {
     books.push(newBook);
};

addBook({
     name: 'Book 4',
     author: 'Author D'
});
console.log(books);

listBooks();
/*Result
Book 1
Book 2
Book 3
Book 4 */


// w/callback
const addBock = (newBook, callback) => {
     books.push(newBook);
     callback();
};

addBock({
     name: 'Book 4',
     author: 'Author D'
}, listBooks);

//Callback fonksiyonu başka bir fonksiyon içerisinde argüman olarak kullanılabilen fonksiyon anlamına gelmektedir.