document.getElementById("pentagon-cal-btn").addEventListener("click", function(){

    const pentagonFirstInputValue = getAreaInputsFromText("pentagon-first-input");
    const pentagonSecondInputValue = getAreaInputsFromText("pentagon-second-input");

    const pentagonFormula =  0.5 * pentagonFirstInputValue * pentagonSecondInputValue;
    const areaOfPentagonFinalResult = pentagonFormula.toFixed(2);
    
    showAreaCalculation("Pentagon", areaOfPentagonFinalResult);
})