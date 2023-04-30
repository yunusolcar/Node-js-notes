const fs = require('fs');

//Dosya Okuma - Read File
fs.readFile('password.txt', 'utf8', (err, data) => {
     if (err) console.log(err);
     console.log(data);
     console.log('Dosya Okundu');
});

//Dosya Yazmak - Write File
fs.writeFile('username.json', ' {"name": "Yunus", "surname": "Xxx"}',
     'utf8', (err) => {
          if (err) console.log(err);
          console.log('Dosya başarıyla oluşturuldu');
     });

//Dosyaya Veri Ekleme - Add data to file
fs.appendFile('password.txt', '\n New Secret Password :D', 'utf8', err => {
     if (err) console.log(err);
     console.log('Dosyaya veri başarıyla eklendi');
});

//Dosya Silme - Delete file
fs.unlink('username.json', err => {
     if (err) console.log(err);
     console.log('Dosya başarıyla silindi');
});

//Klasör Oluşturmak
fs.mkdir('uploads/img', {
     recursive: true
}, err => {
     if (err) console.log(err);
     console.log('Klasör başarıyla oluşturuldu');
});

//Klasör Silme
fs.rmdir('uploads', {
     recursive: true
}, err => {
     if (err) console.log(err);
     console.log('Klasör başarıyla silindi');
});