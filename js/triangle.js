
document.getElementById("triangle-cal-btn").addEventListener("click", function(){

    const trianglesFirstInputValue = getAreaInputsValue("triangle-first-input");
    const trianglesSecondInputValue = getAreaInputsValue("triangle-second-input");
    
    if((trianglesFirstInputValue || trianglesSecondInputValue) || (trianglesFirstInputValue && trianglesSecondInputValue) == ""){
        return;
    }
    if((trianglesFirstInputValue || trianglesSecondInputValue) || (trianglesFirstInputValue && trianglesSecondInputValue) == ""){
        return;
    }
    else{
        const triangleFormula = 0.5 * trianglesFirstInputValue * trianglesSecondInputValue;
        const areaOfTriangleFinalResult = triangleFormula.toFixed(2);
    
    showAreaCalculation("Triangle", areaOfTriangleFinalResult);
    }
})

