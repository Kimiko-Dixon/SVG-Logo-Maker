//Verify that the color is a color keyword
function isColorKeyword(color){
    //Array of color Keywords
    const KEYWORDS =  [
        `AliceBlue`,
        `AntiqueWhite`,
        `Aqua`,
        `Aquamarine`,
        `Azure`,
        `Beige`,
        `Bisque`,
        `Black`,
        `BlanchedAlmond`,
        `Blue`,
        `BlueViolet`,
        `Brown`,
        `BurlyWood`,
        `CadetBlue`,
        `Chartreuse`,
        `Chocolate`,
        `Coral`,
        `CornflowerBlue`,
        `Cornsilk`,
        `Crimson`,
        `Cyan`,
        `DarkBlue`,
        `DarkCyan`,
        `DarkGoldenRod`,
        `DarkGray`,
        `DarkGrey`,
        `DarkGreen`,
        `DarkKhaki`,
        `DarkMagenta`,
        `DarkOliveGreen`,
        `Darkorange`,
        `DarkOrchid`,
        `DarkRed`,
        `DarkSalmon`,
        `DarkSeaGreen`,
        `DarkSlateBlue`,
        `DarkSlateGray`,
        `DarkSlateGrey`,
        `DarkTurquoise`,
        `DarkViolet`,
        `DeepPink`,
        `DeepSkyBlue`,
        `DimGray`,
        `DimGrey`,
        `DodgerBlue`,
        `FireBrick`,
        `FloralWhite`,
        `ForestGreen`,
        `Fuchsia`,
        `Gainsboro`,
        `GhostWhite`,
        `Gold`,
        `GoldenRod`,
        `Gray`,
        `Grey`,
        `Green`,
        `GreenYellow`,
        `HoneyDew`,
        `HotPink`,
        `IndianRed`,
        `Indigo`,
        `Ivory`,
        `Khaki`,
        `Lavender`,
        `LavenderBlush`,
        `LawnGreen`,
        `LemonChiffon`,
        `LightBlue`,
        `LightCoral`,
        `LightCyan`,
        `LightGoldenRodYellow`,
        `LightGray`,
        `LightGrey`,
        `LightGreen`,
        `LightPink`,
        `LightSalmon`,
        `LightSeaGreen`,
        `LightSkyBlue`,
        `LightSlateGray`,
        `LightSlateGrey`,
        `LightSteelBlue`,
        `LightYellow`,
        `Lime`,
        `LimeGreen`,
        `Linen`,
        `Magenta`,
        `Maroon`,
        `MediumAquaMarine`,
        `MediumBlue`,
        `MediumOrchid`,
        `MediumPurple`,
        `MediumSeaGreen`,
        `MediumSlateBlue`,
        `MediumSpringGreen`,
        `MediumTurquoise`,
        `MediumVioletRed`,
        `MidnightBlue`,
        `MintCream`,
        `MistyRose`,
        `Moccasin`,
        `NavajoWhite`,
        `Navy`,
        `OldLace`,
        `Olive`,
        `OliveDrab`,
        `Orange`,
        `OrangeRed`,
        `Orchid`,
        `PaleGoldenRod`,
        `PaleGreen`,
        `PaleTurquoise`,
        `PaleVioletRed`,
        `PapayaWhip`,
        `PeachPuff`,
        `Peru`,
        `Pink`,
        `Plum`,
        `PowderBlue`,
        `Purple`,
        `Red`,
        `RosyBrown`,
        `RoyalBlue`,
        `SaddleBrown`,
        `Salmon`,
        `SandyBrown`,
        `SeaGreen`,
        `SeaShell`,
        `Sienna`,
        `Silver`,
        `SkyBlue`,
        `SlateBlue`,
        `SlateGray`,
        `SlateGrey`,
        `Snow`,
        `SpringGreen`,
        `SteelBlue`,
        `Tan`,
        `Teal`,
        `Thistle`,
        `Tomato`,
        `Turquoise`,
        `Violet`,
        `Wheat`,
        `White`,
        `WhiteSmoke`,
        `Yellow`,
        `YellowGreen`,
    ]
    
    //Check if the color matches any of the keywords in the array
    let found = false;
    KEYWORDS.forEach(keyword => {
        if (keyword.toLowerCase()===color.toLowerCase()){
            found = true
        }    
    })
    return found

}

//Verify that the color is a hexadecimal number
function isHex(color){
    
    //Hexadecimal number criteria (source: Regex Tutorial – How to write Regular Expressions?)
    const hex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")

    //Check if the color is a hexadecimal number
    let ishexVal = false
    if (hex.test(color)) {
        ishexVal = true
    }

    return ishexVal
}

//Shape parent class
class Shape{
    constructor(text,textFill,shapeFill){
        //Verifies that the text is a maximum of 3 characters long
        if(text.length > 3){
            throw new Error('Only enter a MAX of 3 characters')
        }

        //Verifies that textFill and shapeFill are either a color keyword or a hexadecimal number
        if ((!isColorKeyword(textFill) && !isHex(textFill)) || (!isColorKeyword(shapeFill) && !isHex(shapeFill))){
            throw new Error('Enter either a color name or a hexidecimal number')
        }

        this.text = text.toUpperCase()
        this.textFill = textFill
        this.shapeFill = shapeFill
    }
    //Returns the text literal template
    renderText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>`
    }
}

//Triangle child class
class Triangle extends Shape{
    constructor(text,textFill,shapeFill){
        super(text,textFill,shapeFill)
    }
    //Returns the triangle literal template
    render(){
        return `<polygon points="150, 8 274, 182 26, 182" fill="${this.shapeFill}" />`
    }

}
//Circle child class
class Circle extends Shape{
    constructor(text,textFill,shapeFill){
        super(text,textFill,shapeFill)
    }
    //Returns the circle literal template
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeFill}" />`
    }
}
//Square child class
class Square extends Shape{
    constructor(text,textFill,shapeFill){
        super(text,textFill,shapeFill)
    }
    //Returns the square literal template
    render(){
        return `<polygon points="244, 18 244, 182 56, 182, 56,18" fill="${this.shapeFill}" />`
    }
}
//Export the classes
module.exports = {Shape, Triangle, Circle, Square}