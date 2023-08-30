// Crafting the Shape and its Hues
class Form {
  constructor(tint) {
      this.tint = tint;
  }
}

// Forging the Square Form with its Chroma
class SquareShape extends Form {
  design() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.tint}" />`;
  }
}

// Sculpting the Circular Figure with its Shade
class CircularForm extends Form {
  design() {
      return `<circle cx="150" cy="115" r="80" fill="${this.tint}" />`;
  }
}

// Crafting the Triangular Pattern with its Hue
class TriangularShape extends Form {
  design() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.tint}" />`;
  }
}

module.exports = { TriangularShape, SquareShape, CircularForm };