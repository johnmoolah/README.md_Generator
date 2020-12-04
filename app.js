const inquirer = require("inquirer");

inquirer
    .prompt([
        // ReadMe Questions
        {type: "input", name: "TestInput", message: "enter test"},
        {type: "input", name: "TestInput1", message: "enter test"},
        {type: "input", name: "TestInput2", message: "enter test"},
        {type: "input", name: "TestInput3", message: "enter test"},
        ])
        .then (({testInput,testInput3})) ; 
            
    const str = "first test results: ${testInput}/nsecond test results: ${testInput3}";
        
        

        /* // name
        // city
        // hobby
        // food
        // github username
        // linkedIn URL */