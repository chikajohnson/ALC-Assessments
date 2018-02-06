interface ElementSet{
    'div': Element,
    'button': Element

}

class colorChange {
    div:Element;
    constructor(div: Element) {
        this.div = div;
    }

    colorChange(color: string) : boolean {
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}


function multiply(x: number, y: number):number  
{ 
	return x * y; 
}
    
multiply ("6",3);

let elementSets : Array<ElementSet> = [];
let squareSizeNum: number = 100;
let squareSize: string = `${squareSizeNum}px`;

for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

elementSets.map((elem,index) =>{
    let colorChangeClass = new colorChange(elem.div);
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    elem.button.textContent = "Change Color";

    (elem.button as HTMLElement).onclick = (event) =>{
        colorChangeClass.colorChange(Colors[index]);
    }

    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})

enum Colors {
    Green,
    Red,
    Blue,
    Orange
}



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
