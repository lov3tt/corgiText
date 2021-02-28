//Slider Value

//font
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function fontGenerator () {
  var fonts = document.getElementById("fontType");

}

//appendMethod
let fontType = document.querySelector("#fontType");
fontType.appendChild();

console.log(fontType.textContent);

//ani speed
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

//Width
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

//Height
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("value3");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

//x offset
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("value4");
output4.innerHTML = slider4.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
}
//y offset
var slider5 = document.getElementById("myRange5");
var output5 = document.getElementById("value5");
output5.innerHTML = slider5.value;

slider5.oninput = function() {
  output5.innerHTML = this.value;
}

//Get text and compile
function compile(){
    var userInput = document.getElementById("inputText");
    var userOutput = document.getElementById("outputText");
    var name = userInput.value;
    userOutput.value = "Hi there, " + name + "!"
    }