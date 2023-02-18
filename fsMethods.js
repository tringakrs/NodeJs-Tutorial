var fs = require('fs');

//Create a new file using the appendFile() method:
// fs.appendFile('newFile.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

//Create a new, empty file using the open() method:
// fs.open('newFile2.txt', 'w', function (err, file){
//     if(err) throw err;
//     console.log('Saved!');
// });

//Create a new file using the writeFile() method:
// fs.writeFile('newFile3.txt', 'Hello content!', function(err){
//     if(err) throw err;
//     console.log('Sved!');
// });

//Append "This is my text." to the end of the file "mynewfile1.txt":
// fs.appendFile('newFile.txt', 'This is my text.', function(err){
//     if(err) throw err;
//     console.log('Updated!');
// });

//Replace the content of the file "mynewfile3.txt":
// fs.writeFile('newFile3.txt', 'This is my text.', function(err){
//     if(err) throw err;
//     console.log('Replaced!');
// })

//Delete "mynewfile2.txt":
fs.unlink('newFile2.txt', function(err){
    if(err) throw err;
    console.log('File deleted!');
})

//Rename "mynewfile1.txt" to "myrenamedfile.txt":
fs.rename('newFile.txt', 'newFileName.txt', function(err){
    if(err) throw err;
    console.log('File Renamed!');
})

