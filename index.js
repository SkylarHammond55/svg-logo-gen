// Import Inquirer, fs, and shapes
const inquirer = require('inquirer');
const fs = require('fs');
const { TriangularShape, SquareShape, CircularForm } = require('./lib/shapes.js'); // Use the correct class names here

// Initial dimensions
let width = 300;
let height = 200;