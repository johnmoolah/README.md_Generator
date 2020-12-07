const inquirer = require(`inquirer`);
const fs = require("fs")

inquirer
    .prompt([
        /* Pass your questions in here */
        { type: "input", name: "userInput1", message: "Title" },
        { type: "input", name: "userInput2", message: "Table of Contents" },
        { type: "input", name: "userInput3", message: "Description"},
        { type: "input", name: "userInput4", message: "Usage"},
        { type: "input", name: "userInput5", message: "Github"},
        { type: "input", name: "userInput6", message: "LinkedIn"},
        { type: "input", name: "userInput7", message: "License"},
    ])
    
    .then(({userInput1, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7}) => {
            const str = `Title: ${userInput1}\n Table of contents: ${userInput2}\n Descrption: ${userInput3}\n Usage: ${userInput4}\n Github:${userInput5}\n  LinkedIn:${userInput6}\n License:${userInput7}\n`
             

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <h1>${userInput1}</h1>
    <h1>${userInput2}</h1>
    <h1>${userInput3}</h1>
    <h1>${userInput4}</h1>
    <h1>${userInput5}</h1>
    <h1>${userInput6}</h1>
    <h1>${userInput7}</h1>

    </body>
    </html>
    `;

    fs.writeFile("README.md", str, (err) => {
        if (err) throw err;
        console.log("complete");
        });
    })
    .catch((err) => console.log(err));