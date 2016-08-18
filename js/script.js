console.log('Hello, front end');


var output = document.getElementById("output");
var radios = document.getElementsByName("metric");
var temp = document.getElementsByTagName("input")[0];

var boxColor = document.getElementById("output");

var inCelsius = 0;

function convert() {
  if (temp.value === "") {
    alert("Please insert temperature");
    return;
  }
  for (var i = 0 ; i < radios.length; i++) {
        if (radios[i].checked) {
        	if (radios[i].value === "fahrenheit") {
        		output.textContent = Math.round((temp.value - 32) / (9/5)) + " ℃";
            inCelsius = Math.round((temp.value - 32) / (9/5));
        	}

        else if (radios[i].value === "celsius") {
            output.textContent = Math.round(temp.value * 9/5 + 32 ) + " °F";
            inCelsius = temp.value;
          }
        }
    }
}

function changeColor() {
    boxColor.classList = []
      if (inCelsius <= 20 && temp.value !== "" ) {
      boxColor.classList.add("blue");
    }
    else if (inCelsius >= 30) {
      boxColor.classList.add("red")
    }
    else {
      boxColor.classList.add("gray")
    }
}

function clearAll(){

  boxColor.classList = []
  boxColor.classList.add("gray")
  temp.value = ""
  output.textContent = "Insert temperature above."
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

	document.getElementById("submit").addEventListener("click", function(){
	  console.log("Submit button clicked!");
	  convert();
    changeColor();
	});

  document.getElementById("clear").addEventListener("click", function(){
	  console.log("Clear button clicked!");
	  clearAll();
  });

});
