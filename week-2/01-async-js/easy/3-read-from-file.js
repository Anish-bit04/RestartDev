// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// const fs= require("fs")


//     fs.readFile("./4-write-to-file.md",(err,data)=>{
//         try{
//             console.log(data);
//         }
//         catch{
//             console.log(err);
//         }
//     })



// let count =0;
// for (var i=0 ; i<1000000000;i++){
//     count=count+i
// }
// console.log(count)

const fs = require('fs');

const filePath = './file.md';

// Function to read file contents and print to console
const readFileAndPrint = (filePath) => {
  // Reading file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Print file contents
    console.log('File Contents:');
    console.log(data);

    // Perform expensive operation
    performExpensiveOperation();
  });
};

// Function to simulate an expensive operation
const performExpensiveOperation = () => {
  // Simulating an expensive operation with a loop and delay
  for (let i = 0; i < 5; i++) {
    console.log(`Expensive operation step ${i }`);
    // Simulating a delay of 1 second
    delay(1000);
  }

  console.log('Expensive operation complete.');
};

// Function to simulate a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Example usage: Provide the path to the file you want to read
readFileAndPrint(filePath);
