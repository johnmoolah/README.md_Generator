const inquirer = require(`inquirer`);
const fs = require("fs")

inquirer
    .prompt([
        /* Pass your questions in here */
        { 
        type: "input",
        name: "Title",
        message: "What is the name of your project?" 
        },
        { 
        type: "input",
        name: "Installation", 
        message: "How will the user be able to run your code?" 
        },
        { 
        type: "input",
        name: "Description",
        message: "Describe your project"
        },
        {
        type:"input",
        name: "Usage",
        message: "How is your project useful?"
        },
        {
        type: "input",
        name: "Github", 
        message: "What is your Github username?"
        },
        {
        type: "input",
        name: "LinkedIn",
        message: "What is your LinkedIn profile?"
        },
        {
        type: "input", 
        name: "License", 
        message: "Choose a license for your project",
        choice: [{
            name: "Apache License",
            value: "https://choosealicense.com/licenses/apache-2.0/",
        
            name: "MIT License",
            value:"https://choosealicense.com/licenses/mit/"

        }
    ]
    },
    ])
    
    .then(({
        Title, Installation, Description, Usage, Github, LinkedIn, License}) => {
            const str = `Title: ${Title}\n Installation: ${Installation}\n Descrption: ${Description}\n Usage: ${Usage}\n Github:${Github}\n  LinkedIn:${LinkedIn}\n License:${License}\n`
             

    const questions = 
    Title
    Installation
    Description
    Usage
    Github
    LinkedIn
    License;

    fs.writeFile("README.md", str, (err) => {
        if (err) throw err;
        console.log("complete");
        });
    })
    .catch((err) => console.log(err));