function isColorKeyword(color){
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
    let found = false;
    KEYWORDS.forEach(keyword => {
        if (keyword.toLowerCase()===color.toLowerCase()){
            found = true
        }    
    })
    return found

}

function isHex(color){
    if(text.length === 4 || text.length === 7){
        const hex = new RegExp('^#(?=[0-9]{0,6})(?![g-z]{1,})')
        let ishexVal = false
        if (hex.test(color)) {
            ishexVal = true
        }
    }

    return ishexVal
}

class Shape{
    constructor(text,textFill,shapeFill){
        // const characters = text.split()
        if(text.length > 3){
            throw new Error('Only enter a MAX of 3 characters')
        }

        /* if ((!isColorKeyword(textFill) && !isHex(textFill)) || (!isColorKeyword(shapeFill) && !isHex(shapeFill))){
            throw new Error('Enter either a color name or a hexidecimal number')
        } */
        if (!isColorKeyword(textFill) || !isColorKeyword(shapeFill)){
            throw new Error('Enter either a color name or a hexidecimal number')
        } 

        this.text = text.toUpperCase()
        this.textFill = textFill
        this.shapeFill = shapeFill
    }
    renderText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>`
    }
}

class Triangle extends Shape{
    constructor(text,textFill,shapeFill){
        super(text,textFill,shapeFill)
    }
    render(){
        return `<polygon points="150, 8 274, 182 26, 182" fill="${this.shapeFill}" />`
    }

}

class Circle extends Shape{
    constructor(text,textFill,shapeFill){
        super(text,textFill,shapeFill)
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeFill}" />`
    }
}

class Square extends Shape{
    constructor(text,textFill,shapeFill){
        super(text,textFill,shapeFill)
    }
    render(){
        return `<polygon points="244, 18 244, 182 56, 182, 56,18" fill="${this.shapeFill}" />`
    }
}

module.exports = {Shape, Triangle, Circle, Square}