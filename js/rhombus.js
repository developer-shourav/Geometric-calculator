document.getElementById("rhombus-cal-btn").addEventListener("click", function(){
/*-------rhombus first input value-----------  */
    const rhombusFirstInputValue = getAreaInputsFromText("rhombus-first-input");
/*-------rhombus second input value-----------  */
    const rhombusSecondInputValue = getAreaInputsFromText("rhombus-second-input");

/*-------rhombus are calculation method -----------  */
    const rhombusFormula =  0.5 * rhombusFirstInputValue * rhombusSecondInputValue;
    const areaOfRhombusFinalResult = rhombusFormula.toFixed(2);

/*-------rhombus are calculation result  showing function-----------  */
    showAreaCalculation("Rhombus", areaOfRhombusFinalResult);
})
