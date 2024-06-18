// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs')

const filePath = './file.md'
fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.error('Error in File' + err)
    }
    let dataTrim  = data.trim()
    fs.writeFile(filePath,dataTrim,'utf-8',(err,data)=>{
        if(err){
            console.log(err)
            return;
        }
    })
})