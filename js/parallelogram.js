document.getElementById("parallelo-cal-btn").addEventListener("click", function(){

    const parallelosFirstInputValue = getAreaInputsFromText("parallelo-first-input");
    const parallelosSecondInputValue = getAreaInputsFromText("parallelo-second-input");

    const areaOfParalleloFormula =  parallelosFirstInputValue * parallelosSecondInputValue;
    const areaOfParalleloFinalResult = areaOfParalleloFormula.toFixed(2);
    
    showAreaCalculation("Parallelogram", areaOfParalleloFinalResult);
})