var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.colorChange = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChange;
}());
function multiply(x, y) {
    return x * y;
}
multiply("6", 3);
var elementSets = [];
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
elementSets.map(function (elem, index) {
    var colorChangeClass = new colorChange(elem.div);
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.colorChange(Colors[index]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
})(Colors || (Colors = {}));
// let color: string = "green";
// let squareSizeNum: number = 100;
// let squareSize: string = `${ squareSizeNum }px`;
// let button: Element = document.createElement('button');
// let div: Element = document.createElement('div');
// button.textContent = "Change Color";
// (div as HTMLElement).style.width = squareSize;
// (div as HTMLElement).style.width = squareSize;
// (button as HTMLElement).onclick = (event) =>{
//     colorChange(div,color);
// }
// document.body.appendChild(button);
// document.body.appendChild(div);
