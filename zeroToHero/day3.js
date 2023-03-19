//Basics 2

var a = "test TEST2";

console.log(a.toUpperCase()); //TEST TEST2
console.log(a.toLowerCase()); //test test2
console.log(a.length);

var b = 7.4;
console.log(parseInt(b));

var c = "test3";
console.log(isNaN(c));

var d = 3;
console.log(isFinite(d));

var f = 7.8;
console.log(Number.isInteger(f)); //* tam sayı sorgusu yapar

var e = 3.99257129057;
console.log(e.toFixed(5)); //virgülden sonra kaç basamak seçildiğini ayarlamak için

var f = "10";
console.log(f === 10); //*   Tip ve değer eşit mi? false
console.log(f != 10); //*    Değeri eşit  değil mi? false
console.log(f !== 10); //*   Tip ve değer eşit değil mi? true