const {Shape, Triangle, Circle, Square} = require('./shapes.js')

describe('Shapes', () => {
    it('throws an error if the text is more than three characters', () => {
            const shape = () => new Shape('test', 'white', 'blue');
            const error = new Error('Only enter a MAX of 3 characters')
            expect(shape).toThrow(error)
        })
        it('throws an error if an entered color is not a color keyword or hexidecimal number', () => {
            const shape = () => new Shape('the', 'reds', 'blue');
            const error = new Error('Enter either a color name or a hexidecimal number')
            expect(shape).toThrow(error)

        })
        it('throws an error if an entered color is not a color keyword or hexidecimal number', () => {
            const shape = () => new Shape('the', '#00000g', 'blue');
            const error = new Error('Enter either a color name or a hexidecimal number')
            expect(shape).toThrow(error)

        })
        it('throws an error if an entered color is not a color keyword or hexidecimal number', () => {
            const shape = () => new Shape('the', '#000000', 'blue');
            expect(shape).toEqual({text:THE,textFill:'#000000',shapeFill:'blue'})

        })
    describe('renderText', () => {
        it('returns a string for the SVG file with the given text color', () => {
            const shape = new Shape('the', 'white', 'blue');
            expect(shape.renderText()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textFill}">${shape.text}</text>`)
        })
        
    })
})

describe('Triangle', () => {
    describe('render', () => {
        it('returns a string for the SVG file with the given shape color', () => {
            const shape = new Triangle('the', 'white', 'blue');
            expect(shape.render()).toEqual(`<polygon points="150, 8 274, 182 26, 182" fill="${shape.shapeFill}" />`)
        })
    })
})

describe('Circle', () => {
    describe('render', () => {
        it('returns a string for the SVG file with the given shape color', () => {
            const shape = new Circle('the', 'white', 'blue');
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${shape.shapeFill}" />`)
        })
    })
})

describe('Square', () => {
    describe('render', () => {
        it('returns a string for the SVG file with the given shape color', () => {
            const shape = new Square('the', 'white', 'blue');
            expect(shape.render()).toEqual(`<polygon points="244, 18 244, 182 56, 182, 56,18" fill="${shape.shapeFill}" />`)
        })
    })
})