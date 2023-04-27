// Async - Await Yapısı
/*Bir fonksiyon async anahtar kelimesi ile birlikte tanımlanırsa,
fonksiyonun olumlu sonuçlanması sonucunda bir Promise döner. 
Bir async fonksiyon await anahtar kelimesi ile birlikte kullanılırsa ilgili 
Promise olumlu bir şekilde dönene kadar async fonksiyonunun çalışması bekletilir.
*/

function getData(data) {
     return new Promise((resolve, reject) => {
          console.log('Veriler alınıyor');

          if (data) {
               resolve('Veriler başarıyla alındı');
          } else {
               reject('Veri alımı başarısız!');
          }
     })
};

function clenData(receivedData) {
     return new Promise((resolve, reject) => {
          console.log('Veriler düzenleniyor');

          if (receivedData) {
               resolve('Veriler düzenlendi');
          } else {
               reject('Veri düzenlenemedi!');
          }
     })
};

// Promise ile
/*
getData(true)
     .then(result => {
          console.log(result);
          return clenData(false);
     }).then(result => {
          console.log(result);
     }).catch(error => {
          console.log(error);
     });
*/

//Async yapısı ile

async function processData() {
     try {
          const receivedData = await getData(false);
          console.log(receivedData);
          const cleanData = await clenData(true);
          console.log(cleanData);

     } catch (error) {
          console.log(error);
     }
}
processData();