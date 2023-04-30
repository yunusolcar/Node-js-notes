//Patika.dev Create-Read-Update-Delete Example
const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1  Iggy", "salary": 2000}',
     'utf8', (err) => {
          if (err) console.log(err);
          console.log('OK');
     });

fs.readFile('employees.json', 'utf8', err => {
     if (err) console.log(err);
     console.log('File readed');
});

fs.appendFile('employees.json', '\n {"name": "Employee 2 : Yunus", "salary": 3000}', 'utf8', err => {
     if (err) console.log(err);
     console.log('Updated');
});

fs.unlink('employees.json', err => {
     if (err) console.log(err);
     console.log('File deleted');
});