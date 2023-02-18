document.getElementById("rectangle-cal-btn").addEventListener("click", function(){

    const rectanglesFirstInputValue = getAreaInputsValue("rectangle-first-input");
    const rectanglesSecondInputValue = getAreaInputsValue("rectangle-second-input");

    const areaOfRectangleFormula = rectanglesFirstInputValue * rectanglesSecondInputValue;
    const areaOfRectangleFinalResult = areaOfRectangleFormula.toFixed(2);
    
    showAreaCalculation("Rectangle", areaOfRectangleFinalResult);
})