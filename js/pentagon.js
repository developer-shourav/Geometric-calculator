document.getElementById("pentagon-cal-btn").addEventListener("click", function(){
/*-------pentagon first input value-----------  */
    const pentagonFirstInputValue = getAreaInputsFromText("pentagon-first-input");
/*-------pentagon second input value-----------  */
    const pentagonSecondInputValue = getAreaInputsFromText("pentagon-second-input");

/*-------pentagon area calculation method-----------  */
    const pentagonFormula =  0.5 * pentagonFirstInputValue * pentagonSecondInputValue;
    const areaOfPentagonFinalResult = pentagonFormula.toFixed(2);

/*-------pentagon area calculation result showing functions-----------  */
    showAreaCalculation("Pentagon", areaOfPentagonFinalResult);
})

