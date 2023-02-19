document.getElementById("parallelo-cal-btn").addEventListener("click", function(){
/*-------parallelogram first input value-----------  */
    const parallelosFirstInputValue = getAreaInputsFromText("parallelo-first-input");
/*-------parallelogram second input value-----------  */
    const parallelosSecondInputValue = getAreaInputsFromText("parallelo-second-input");

/*-------parallelogram Area calculation method -----------  */
    const paralleloFormula =  parallelosFirstInputValue * parallelosSecondInputValue;
    const areaOfParalleloFinalResult = paralleloFormula.toFixed(2);

/*-------parallelogram Area calculation result showing function -----------  */
    showAreaCalculation("Parallelogram", areaOfParalleloFinalResult);
})