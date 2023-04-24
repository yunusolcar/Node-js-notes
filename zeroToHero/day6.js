const arguments = process.argv.slice(2);

function primeNumbers(lowerNumber, higherNumber) {
     for (i = lowerNumber; i <= higherNumber; i++) {
          let isPrime = true;
          for (let j = 2; j <= i; j++) {
               if (i % j === 0 && j !== i) {
                    isPrime = false;
               }
          }
          if (isPrime) {
               console.log(i);
          }
     }
}

//console.log(process); //işlemlerle ilgili detaylı bilgiler verir.
console.log(process.argv); //işlemlerle ilgili bir array döndürür.
//Bu array programı çalıştıran kullanılan parametreleri döndürür.
//console.log(process.argv.slice(2));

primeNumbers(arguments[0] * 1, arguments[1] * 1);