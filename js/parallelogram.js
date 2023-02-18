document.getElementById("parallelo-cal-btn").addEventListener("click", function(){

    const parallelosFirstInputValue = getAreaInputsFromText("parallelo-first-input");
    const parallelosSecondInputValue = getAreaInputsFromText("parallelo-second-input");

    const paralleloFormula =  parallelosFirstInputValue * parallelosSecondInputValue;
    const areaOfParalleloFinalResult = paralleloFormula.toFixed(2);
    
    showAreaCalculation("Parallelogram", areaOfParalleloFinalResult);
})