document.getElementById("rectangle-cal-btn").addEventListener("click", function(){
/*-------rectangle first input value-----------  */
    const rectanglesFirstInputValue = getAreaInputsValue("rectangle-first-input");
/*-------rectangle second input value-----------  */
    const rectanglesSecondInputValue = getAreaInputsValue("rectangle-second-input");

/*-------rectangle area calculation method -----------  */
    const rectangleFormula = rectanglesFirstInputValue * rectanglesSecondInputValue;
    const areaOfRectangleFinalResult = rectangleFormula.toFixed(2);

/*-------rectangle area calculation result showing function -----------  */
    showAreaCalculation("Rectangle", areaOfRectangleFinalResult);
})
