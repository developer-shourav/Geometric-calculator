
document.getElementById("triangle-cal-btn").addEventListener("click", function(){

    var trianglesFirstInputValue = getAreaInputsValue("triangle-first-input");
    var trianglesSecondInputValue = getAreaInputsValue("triangle-second-input");

        const triangleFormula = 0.5 * trianglesFirstInputValue * trianglesSecondInputValue;
        const areaOfTriangleFinalResult = triangleFormula.toFixed(2);
        console.log("The fourmula is", areaOfTriangleFinalResult);
        showAreaCalculation("Triangle", areaOfTriangleFinalResult);


    
 
})

