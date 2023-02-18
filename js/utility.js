/* ======================================== */
function getAreaInputsValue (id){
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';

    return inputFieldValue;
};
/* ======================================== */
function getAreaInputsFromText (id){
    const measuringInput = document.getElementById(id);
    const measuringInputString = measuringInput.innerText;
    const measuringInputValue = parseFloat(measuringInputString);
    return measuringInputValue;
};
/* ======================================== */
function showAreaCalculation(calculatedAreaOf, result) {

    const areaCalculationViewArea = document.getElementById("result-shower-container");
    const resultList = document.createElement("li");
    resultList.className = "my-3"
    resultList.innerHTML = `
    <span>${calculatedAreaOf}</span> <span class="mx-2 ">${result}cm<sup>2</sup></span> <button class="btn btn-primary">Covert to m<sup>2</sup></button>
    `;
    areaCalculationViewArea.appendChild(resultList);
    
};





function setTriangleBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const triangleCard = document.getElementById("triangle-card");
    triangleCard.style.backgroundColor = "#" + randomColor;
}

function setRectangleBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const rectangleCard = document.getElementById("rectangle-card");
    rectangleCard.style.backgroundColor = "#" + randomColor;
}

function setParallelogramBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const parallelogramCard = document.getElementById("parallelogram-card");
    parallelogramCard.style.backgroundColor = "#" + randomColor;
}


function setRhombusBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const rhombusCard = document.getElementById("rhombus-card");
    rhombusCard.style.backgroundColor = "#" + randomColor;
}

