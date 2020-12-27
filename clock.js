var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#description");
var tempreature = document.getElementById("temp");
var display_day = document.getElementById("day");

var serverURL = "http://api.openweathermap.org/data/2.5/weather?q="

function getTranslationURL(city) {
    return serverURL + city +"&appid=98ab434db99a4ec145c5515049e980fc";
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time");
}


function clickHandler() {
    var inputText = txtInput.value;
    
    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            let temp = Math.floor(json.main.temp -273.15) ;
            let condition = json.weather[0].description;
            var descirption = json.name +" : "+ condition;
            tempreature.innerHTML = temp + "\&#8451";
            outputDiv.innerText = descirption; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)


// timer
function timer (){
    var date = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    console.log(days[date.getDay()]);
     let day =  display_day.innerHTML = days[date.getDay()];
     let dateformat = date.toLocaleTimeString();
    document.getElementById("hours").innerHTML = dateformat;}
    // to run just after loading of loading 
      let times =  setInterval(timer,1000);