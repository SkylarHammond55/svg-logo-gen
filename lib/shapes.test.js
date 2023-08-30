const { TriangleFigure, SquareFigure, CircleFigure } = require("./shapes.js");

// Square Test
describe("Square test", () => {
    test("should make code snippet for a square with a red background", () => {
        const shape = new SquareFigure("red");
        expect(shape.materialize()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="red" />'
        );
    });
});

// Circle Test
describe("Circle test", () => {
    test("should make code snippet for a circle with a pink background", () => {
        const shape = new CircleFigure("pink");
        expect(shape.materialize()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="pink" />'
        );
    });
});

// Triangle Test
describe("Triangle test", () => {
    test("should make code snippet for a triangle with a blue background", () => {
        const shape = new TriangleFigure("blue");
        expect(shape.materialize()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        );
    });
});