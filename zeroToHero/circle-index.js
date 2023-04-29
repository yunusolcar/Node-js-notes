const {
     circleArea,
     circumference
} = require('./circle');

console.log('Daire alanı: ' + circleArea(10));
console.log('Daire çevresi: ' + circumference(2));

/*Bu uygulamada circle.js dosyasından almış olduğumuz 
daire alanı ve daire çevresi hesabını buraya import ederek
tekrardan fonksiyon yazmak zorunda kalmadık.
*/