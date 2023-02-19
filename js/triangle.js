
document.getElementById("triangle-cal-btn").addEventListener("click", function(){
/*-------triangle first input value-----------  */
    const trianglesFirstInputValue = getAreaInputsValue("triangle-first-input");
/*-------triangle second input value-----------  */
    const trianglesSecondInputValue = getAreaInputsValue("triangle-second-input");

/*-------triangle area calculation Method-----------  */
        const triangleFormula = 0.5 * trianglesFirstInputValue * trianglesSecondInputValue;
        const areaOfTriangleFinalResult = triangleFormula.toFixed(2);

/*-------triangle area calculation result showing functions-----------  */
        showAreaCalculation("Triangle", areaOfTriangleFinalResult);

})

