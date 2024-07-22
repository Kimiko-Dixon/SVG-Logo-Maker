const inquirer = require('inquirer')
const {Triangle,Circle, Square} = require('./lib/shapes.js')
const { writeFile } = require('fs')


inquirer
    .prompt([
        {
            type: 'input',
            message:'Enter a MAX of 3 characters',
            name:'text'
        },
        {
            type: 'input',
            message:'Enter the text color (color keyword OR hexadecimal number)',
            name:'textFill'
        },
        {
            type: 'list',
            message:'Select a shape',
            name:'shape',
            choices:['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            message:'Enter the shape color (color keyword OR hexadecimal number)',
            name:'shapeFill'
        },
    ]).then(({text, textFill, shape, shapeFill}) =>
    {
       
        let newShape;
        switch(shape){
            case 'Triangle':
                newShape = new Triangle(text, textFill, shapeFill)
                break;
            case 'Circle':
                newShape = new Circle(text, textFill, shapeFill) 
                break;
            case 'Square':
                newShape = new Square(text, textFill, shapeFill)
                break;

        }
        
        writeToFile(newShape)

    })

    function writeToFile(newShape){
        const fileContent=`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${newShape.render()}

  ${newShape.renderText()}

</svg>`
        writeFile(`logo.svg`, fileContent,err => err ? console.log('error creating file') : console.log( "Generated logo.svg"))
    }