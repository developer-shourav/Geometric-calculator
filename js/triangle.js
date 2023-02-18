console.log("Triangle is connected");

document.getElementById("triangle-cal-btn").addEventListener("click", function(){
    const trianglesInputField1 = document.getElementById("triangle-first-input");
    const trianglesInputField1String = trianglesInputField1.value;
    const trianglesInputField1Value = parseFloat(trianglesInputField1String);
    trianglesInputField1.value = '';
    
    const trianglesInputField2 = document.getElementById("triangle-second-input");
    const trianglesInputField2String = trianglesInputField2.value;
    const trianglesInputField2Value = parseFloat(trianglesInputField2String);
    trianglesInputField2.value = '';

    const areaOfTriangle = 0.5 * trianglesInputField1Value * trianglesInputField2Value;
    const areaOfTriangleFinalResult = areaOfTriangle.toFixed(2);
    
    const areaCalculationViewArea = document.getElementById("result-shower-container");
    const resultList = document.createElement("li");
    resultList.className = "my-3"
    resultList.innerHTML = `
    <span>Triangle</span> <span class="mx-2 ">${areaOfTriangleFinalResult}cm<sup>2</sup></span> <button class="btn btn-primary">Covert to m<sup>2</sup></button>
    `;
    areaCalculationViewArea.appendChild(resultList);
})

