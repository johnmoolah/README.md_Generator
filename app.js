const inquirer = require(`inquirer`);
const fs = require("fs")

inquirer
    .prompt([
        /* Pass your questions in here */
        { type: "input", name: "userInput", message: "Title" },
        { type: "input", name: "userInput1", message: "Table of Contents" },
        { type: "input", name: "userInput2", message: "Description"},
        { type: "input", name: "userInput3", message: "Usage"},
        { type: "input", name: "userInput4", message: "License"},
    ])
    
    .then(({userInput, userInput1, userInput2, userInput3, userInput4}) => {
            const str = `Title: ${userInput}\n Table of contents: ${userInput1}\nDescrption: ${userInput2}\n Usage: ${userInput3}\n License:${userInput4}\n `
             

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>README_Generator</title>
    </head>
    <body>
    <h1>${userInput}</h1>
    <h1>${userInput1}</h1>
    <h1>${userInput2}</h1>
    <h1>${userInput3}</h1>
    <h1>${userInput4}</h1>

    </body>
    </html>
    `;

    fs.writeFile("README.md", str, (err) => {
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