// BREAK - CONTINUE - LABEL


//* Break Statement

for (var i = 0; i < 10; i++) {
     if (i == 6) break;
     console.log(i); //! 6 ya ulaştığında döngüyü kırar
}
console.log("Bitti");


//* Continue Statement

var ages = [10, 20, 13, 45];
for (age of ages) {
     if (age < 15) continue;

     console.log(age); //! Döngüyü kırmadan her büyük olduğu durumda devam eder. Büyükleri yazdırır
}


//*Label Statement

first:
for (var j = 0; i < 10; i++) {
     second:
     for (var j = 0; j < 10; j++) {
          if (j == 5) continue first;

          console.log(j);
     }
     console.log(`Number: ${i}`);
}