document.getElementById("ellipse-cal-btn").addEventListener("click", function(){
/*-------ellipse first input value-----------  */
    const ellipseFirstInputValue = getAreaInputsFromText("ellipse-first-input");
/*-------ellipse second input value-----------  */
    const ellipseSecondInputValue = getAreaInputsFromText("ellipse-second-input");
/*-------ellipse area calculation-----------  */
    const ellipseFormula =  3.14159 * ellipseFirstInputValue * ellipseSecondInputValue;
    const areaOfEllipseFinalResult = ellipseFormula.toFixed(2);
/*-------ellipse area result showing function-----------  */
    showAreaCalculation("Ellipse", areaOfEllipseFinalResult);
})