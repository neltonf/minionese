var txtValue = document.getElementById("English");
var btn = document.getElementById("submitBtn");
var outputText = document.getElementById("Minion");

var textURL = "https://api.funtranslations.com/translate/minion.json";


function sendMessage(inputText) {
        return textURL+"?text="+inputText;
    }
    
    btn.addEventListener("click", updateMinion);

function errorHandler(error){
    alert("Something went wrong try again later");
}
    
function updateMinion(){

    var inputText = txtValue.value;
    fetch(sendMessage(inputText))
    .then(data =>{return data.json()})
    .then(res => {
        var translated = res.contents.translated;
        outputText.innerHTML = translated;
    })
    .catch(errorHandler)

};

