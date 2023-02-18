document.getElementById("rhombus-cal-btn").addEventListener("click", function(){

    const rhombusFirstInputValue = getAreaInputsFromText("rhombus-first-input");
    const rhombusSecondInputValue = getAreaInputsFromText("rhombus-second-input");

    const rhombusFormula =  0.5 * rhombusFirstInputValue * rhombusSecondInputValue;
    const areaOfRhombusFinalResult = rhombusFormula.toFixed(2);
    
    showAreaCalculation("Rhombus", areaOfRhombusFinalResult);
})
