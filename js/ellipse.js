document.getElementById("ellipse-cal-btn").addEventListener("click", function(){

    const ellipseFirstInputValue = getAreaInputsFromText("ellipse-first-input");
    const ellipseSecondInputValue = getAreaInputsFromText("ellipse-second-input");

    const ellipseFormula =  3.14159 * ellipseFirstInputValue * ellipseSecondInputValue;
    const areaOfEllipseFinalResult = ellipseFormula.toFixed(2);
    
    showAreaCalculation("Ellipse", areaOfEllipseFinalResult);
})