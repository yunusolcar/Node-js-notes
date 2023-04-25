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