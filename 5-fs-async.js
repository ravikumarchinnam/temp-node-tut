const { readFile, writeFile } = require('fs');

readFile('./content/folder/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const first = data;
    readFile('./content/folder/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        const second = data;
        writeFile('./content/folder/fsasy.txt',`${first}, ${second}`,(err, data)=>{
            if(err){
                console.log(err);
            }
            console.log("data has been created");
        })
    })
})

// writeFile('./content/folder/async.txt', "this is for async file", (err, data)=>{
//     console.log(data, err);
// })