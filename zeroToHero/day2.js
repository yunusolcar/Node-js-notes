//Basics

var a = "Hello";
var b = "World";
var c = `${a} ${b}`;
var d = `${a} ${b} ${4 + 7} test3`;

console.log(d);

var x = "test";
console.log(a[1]); //e
console.log(x.charAt(2)); //s

var z = "Merhaba Dünya";
console.log(z.indexOf("a", 2); // 2. indexten başlarayak ilk "a" stringinin indexini yazdırır
console.log(z.lastIndexOf("a", 10)); // 10. indexe kadar arar, son "a" stringinin indexini yazdırır