const inquirer = require(`inquirer`);
const fs = require("fs")

inquirer
    .prompt([
        // ReadMe Questions
        { type: "input", name: "TestInput", message: "enter a test" },
        { type: "input", name: "TestInput1", message: "enter another test" },
        { type: "input", name: "TestInput2", message: "enter test 3 "},
        { type: "input", name: "TestInput3", message: "enter test 4 "},
    ])
    
    .then(({testInput,testInput3}) => {
            const str = `first test results: ${testInput}\nsecond test results: ${testInput3}`;

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>README_Generator</title>
    </head>
    <body>
    <h1>${testInput}</h1>
    <h1>${testInput3}</h1>

    </body>
    </html>
    `;

    fs.writeFile("README.html", str, (err) => {
        if (err) throw err;
        console.log("complete");
        });
    })
    .catch((err) => console.log(err));
        
        

    //     /* // name
    //     // city
    //     // hobby
    //     // food
    //     // github username
    //     // linkedIn URL */