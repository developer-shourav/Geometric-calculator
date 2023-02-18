
function getAreaInputsValue (id){
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';

    return inputFieldValue;
};


function showAreaCalculation(calculatedAreaOf, result) {

    const areaCalculationViewArea = document.getElementById("result-shower-container");
    const resultList = document.createElement("li");
    resultList.className = "my-3"
    resultList.innerHTML = `
    <span>${calculatedAreaOf}</span> <span class="mx-2 ">${result}cm<sup>2</sup></span> <button class="btn btn-primary">Covert to m<sup>2</sup></button>
    `;
    areaCalculationViewArea.appendChild(resultList);
    
};