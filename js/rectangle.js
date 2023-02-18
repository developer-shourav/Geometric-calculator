document.getElementById("rectangle-cal-btn").addEventListener("click", function(){

    const rectanglesFirstInputValue = getAreaInputsValue("rectangle-first-input");
    const rectanglesSecondInputValue = getAreaInputsValue("rectangle-second-input");

    const rectangleFormula = rectanglesFirstInputValue * rectanglesSecondInputValue;
    const areaOfRectangleFinalResult = rectangleFormula.toFixed(2);
    
    showAreaCalculation("Rectangle", areaOfRectangleFinalResult);
})
