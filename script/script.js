"use strict";
// for counting serial of results
let count = 0;

// triangle
// to make the calculation easier all the lengths are considered as height and base. 
const triangle = {
    name: "Triangle",
    base: document.getElementById("triangle-base"),
    height:document.getElementById('triangle-height'),
    massage:document.getElementById("triangle").querySelector(".massage"),

    area(){
        return 0.5 * parseFloat(triangle.base.value) * parseFloat(triangle.height.value);
    },
     convert(){
        return triangle.area() * 0.0001;
    }
}

// rectangle 

const rectangle = {
    name: "Rectangle",
    base: document.getElementById("rectangle-length"),//length
    height:document.getElementById('rectangle-width'),//width
    massage:document.getElementById("rectangle").querySelector(".massage"),
    area(){
        return parseFloat(rectangle.base.value) * parseFloat(rectangle.height.value);
    },

    convert(){
        return rectangle.area() * 0.0001;
    }
}


//parallelogram

const parallelogram ={
    name: "Parallelogram",
    base: document.getElementById("parallelogram-base"),
    height:document.getElementById("parallelogram-height"),
    massage:document.getElementById("parallelogram").querySelector(".massage"),
    area(){
        return parseFloat(parallelogram.base.value) * parseFloat(parallelogram.height.value);
    },
    convert(){
        return parallelogram.area() * 0.0001;
    }
}

// Rhombus

const rhombus = {
    name: "Rhombus",
    base: document.getElementById("rhombus-d1"),// d1 
    height:document.getElementById("rhombus-d2"),//d2
    massage:document.getElementById("rhombus").querySelector(".massage"),
    area(){
        return 0.5 * parseFloat(rhombus.base.value) * parseFloat(rhombus.height.value);
    },
    convert(){
        return rhombus.area() * 0.0001;
    }
}


// pentagon

const pentagon = {
    name: "Pentagon",
    base: document.getElementById("pentagon-p"),// perimeter
    height:document.getElementById("pentagon-b"),// apothem
    massage:document.getElementById("pentagon").querySelector(".massage"),
    area(){
        return 0.5 * parseFloat(pentagon.base.value) * parseFloat(pentagon.height.value);
    },
    convert(){
        return pentagon.area() * 0.0001;
    }
}

// Ellipse
const ellipse = {
    name: "Ellipse",
    base: document.getElementById("ellipse-a"),// a
    height:document.getElementById("ellipse-b"),// b
    massage:document.getElementById("ellipse").querySelector(".massage"),

    area(){
        return 3.1416 * parseFloat(ellipse.base.value) * parseFloat(ellipse.height.value);
    },
    convert(){
        return ellipse.area() * 0.0001;
    }
}

// function for calculating result

function calculateResult(obj){

    obj.massage.innerText ="";
    obj.massage.style.backgroundColor = "transparent";

     if(isNaN(parseFloat(obj.base.value)) || isNaN(parseFloat(obj.height.value)) ){
        
        obj.massage.style.backgroundColor = "#fff";
        obj.massage.innerText = "Please enter numbers as input"

    }

    else if(parseFloat(obj.base.value) < 0 || parseFloat(obj.height.value) < 0) {
        obj.massage.style.backgroundColor = "#fff";
        obj.massage.innerText = "Please enter positive numbers";       
    }

    else  {

    count +=1;
   

    const element = document.createElement("ul");
    element.classList.add("table");
    element.setAttribute("id","table");
    
    element.innerHTML = 
    
     ` <li class="table-row">

        <p>${count}. ${obj.name}</p>
        <p id="result-area-${obj.name}-${count}">${obj.area().toFixed(2)} cm<sup>2</sup></p>
        <p><button class="btn btn-result" id="convert-${obj.name}-${count}" onclick="convertM('${obj.name}-${count}', '${obj.convert()}')">convert to m<sup>2</sup></button></p>
        </li> `;

    document.querySelector("#result").appendChild(element);


    }
}

// function for showing result

function showResult(object, id){
    document.getElementById(id).addEventListener("click", function(){
        calculateResult(object);
    })
}

// function for changing result

function colorChange(id){
    document.getElementById(id).addEventListener("mouseenter", function(e){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`
    })
    }
    


showResult(triangle, "triangle-calculate");
showResult(rectangle, "rectangle-calculate");
showResult(parallelogram, "parallelogram-calculate");
showResult(rhombus, "rhombus-calculate");
showResult(pentagon, "pentagon-calculate");
showResult(ellipse, "ellipse-calculate");


 var inputs = document.getElementsByClassName("card");
for (var i = 0; i < inputs.length; i++) {
    colorChange(inputs[i].id);
}

// convert to meter square

// document.getElementById(`convert-${obj.name}`).addEventListener("click", function(){
        
//     document.getElementById(`result-area-${obj.name}`).innerHTML = `${obj.convert()} m<sup>2</sup>`; 
    
//  })


function convertM (id, value){
    document.getElementById(`result-area-${id}`).innerHTML = `${value} m<sup>2</sup>`;   
}

document.getElementById("blog").onclick = function () {
    location.href = "../blog.html";
};