// Import Inquirer, fs, and shapes
const inquirer = require('inquirer');
const fs = require('fs');
const { TriangularShape, SquareShape, CircularForm } = require('./lib/shapes.js'); // Use the correct class names here

// Initial dimensions
let width = 300;
let height = 200;

// writeToFile function that takes the input from questions and calls shapes.js
function writeToFile(answers) {
  // Size snippet
  let snippet = `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><g>`;
  // Shape snippet
  let userShape;
  if (answers.shape === 'Triangle') {
      userShape = new TriangularShape(answers.shapeColor); // Use TriangularShape
  } else if (answers.shape === 'Square') {
      userShape = new SquareShape(answers.shapeColor); // Use SquareShape
  } else {
      userShape = new CircularForm(answers.shapeColor); // Use CircularForm
  }
  snippet += userShape.design(); // Use the correct method name
  // Text snippet
  snippet += `<text x="${width / 2}" y="${height / 2}" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text></g></svg>`;

  // Name the logo
  let logoName = `${answers.shapeColor}_${answers.shape}_${answers.text}_logo`;

  // Create SVG file
  fs.writeFile(`./examples/${logoName}.svg`, snippet, (err) => {
      err ? console.log(err) : console.log(`Generated ${logoName}.svg`);
  });
}

// questions function that asks for input from the user
function questions() {
  inquirer
      .prompt([
          // Text
          {
              type: 'input',
              message: 'Enter up to three characters for the logo',
              name: 'text',
          },
          // Text Color
          {
              type: 'input',
              message: 'Choose text color for the logo (color keyword OR a hexadecimal number)',
              name: 'textColor',
          },
          // Shape
          {
              type: 'list',
              message: 'Choose a shape for the logo',
              choices: ['Square', 'Circle', 'Triangle'],
              name: 'shape',
          },
          // Shape Color
          {
              type: 'input',
              message: 'Choose shape color for the logo (color keyword OR a hexadecimal number)',
              name: 'shapeColor',
          },
          // Logo Width
          {
              type: 'input',
              message: 'Enter the width of the logo',
              name: 'logoWidth',
              default: width,
          },
          // Logo Height
          {
              type: 'input',
              message: 'Enter the height of the logo',
              name: 'logoHeight',
              default: height,
          },
      ])
      .then((answers) => {
          // Error handling for text
          if (answers.text.length > 3) {
              console.log('Please have no more than 3 characters');
              questions();
          } else {
              width = parseInt(answers.logoWidth);
              height = parseInt(answers.logoHeight);
              writeToFile(answers);
          }
      });
}

// Initiate
questions();