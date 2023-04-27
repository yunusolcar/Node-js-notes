// PROMISE

/*Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. 
Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda 
Resolve ile belirtilen işlemlerin, olumsuz durumlarda da Reject ile belirtilen işlemlerin 
yapılacağına dair güvence verir. Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar. */

const herseyYolunda = true;
const sozVerdik = new Promise(function (resolve, reject) {
     if (herseyYolunda) {
          resolve('İşlem tamam!');
     } else {
          reject('Bir sıkıntı var...');
     }
});

sozVerdik.then(function (cevap) {
     console.log(cevap) // 'İşlem tamam!' yazısını basar
}).catch(function (hata) {
     console.log(hata) // 'Bir sıkıntı var...' yazısını basar
});