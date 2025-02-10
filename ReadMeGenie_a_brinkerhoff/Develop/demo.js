// import inquirer from "inquirer";
// import fs from "fs";
// import generateMarkdown from "./utils/generateMarkdown.js";

// const questions = [
//     {
//         type: 'input',
//         name: 'Title',
//         message: 'Please enter the title.',
//     },
//     {
//         type: 'input',
//         name: 'Discription',
//         message: 'Please enter a discription.',
//     },
//     {
//         type: 'input',
//         name: 'Table of Contents',
//         message: 'Please enter table of contents',
//     },
//     {
//         type: 'input',
//         name: 'Installation',
//         message: 'Please enter the Installation instructions',
//     },
//     {
//         type: 'input',
//         name: 'Usage',
//         message: 'Please enter the usage infomration',
//     },
//     {
//         type: 'list',
//         name: 'License',
//         message: 'message',
//         choices: [
//             "MIT",
//             "Apache",
//             "GPL"
//         ]
//     },
//     {
//         type: 'input',
//         name: 'Contributing',
//         message: 'Please enter the contribution guidlines.',
//     },
//     {
//         type: 'input',
//         name: 'Tests',
//         message: 'Please enter test instructions',
//     },
//     {
//         type: 'input',
//         name: 'githubUsername',
//         message: 'Enter your Github Username',
//     },
//     {
//         type: 'input',
//         name: 'emailAddress',
//         message:'Enter your email address'
//     },
// ];

// inquirer.prompt(questions)
// .then((data) => {
//     console.log(data);


//     // create a string template

//     const template = generateMarkdown(data)

//     console.log(template);

//     fs.writeFile("SAMPLE.md", template, () => {
//         console.log("REAMDE created!")
//     })

// })