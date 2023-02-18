
document.getElementById("triangle-cal-btn").addEventListener("click", function(){

    const trianglesFirstInputValue = getAreaInputsValue("triangle-first-input");
    const trianglesSecondInputValue = getAreaInputsValue("triangle-second-input");

    const areaOfTriangle = 0.5 * trianglesFirstInputValue * trianglesSecondInputValue;
    const areaOfTriangleFinalResult = areaOfTriangle.toFixed(2);
    
    showAreaCalculation("Triangle", areaOfTriangleFinalResult);
})

