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
