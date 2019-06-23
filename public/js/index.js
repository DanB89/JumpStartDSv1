window.onload = function(){
  var button = document.getElementById("button")
  button.addEventListener("click", makeRequest);
  var cityInput = document.getElementById("cityInput");


cityInput.addEventListener("keydown", function(e){
  if (e.keyCode === 13) {
    makeRequest();
  }
})
}




function makeRequest (){
  var cityInput = document.getElementById("cityInput");
  console.log(cityInput);

  var apiKey = "ad5d84d8e7a3ae5d22885073b250ca14"
  var weathermain = document.getElementById("weathermain")
  var weatherhumidity = document.getElementById("weatherhumidity")
  var weatherdescription = document.getElementById("weatherdescription")
  var weathertemperature = document.getElementById("weathertemperature")
  var weatherimage = document.getElementById("weatherimage")

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" +cityInput.value +"&APPID=ad5d84d8e7a3ae5d22885073b250ca14", true);
  xhr.onload = function (e){
  if(xhr.readyState ===4){
    if(xhr.status === 200){

      var data = JSON.parse(xhr.responseText);
      console.log(data);
      weathermain.innerHTML = data.weather[0].main
      console.log(data.weather[0]);

      weatherhumidity.innerHTML = data.main.humidity + "%"
      console.log(data.weather[0]);

      weatherdescription.innerHTML = data.weather[0].description
      console.log(data.weather[0]);

      weathertemperature.innerHTML = (data.main.temp-273.15).toFixed() + "˚C"
      console.log(data.weather[0]);

      if (data.weather[0].main === "Clear") {
        weatherimage.src="../../assets/images/clear.png"
      }
      if (data.weather[0].main === "Clouds") {
        weatherimage.src="../../assets/images/clouds.png"
      }
      if (data.weather[0].main === "Rain") {
        weatherimage.src="../../assets/images/rain.png"
      }
      if (data.weather[0].main === "Drizzle") {
        weatherimage.src="../../assets/images/rain.png"
      }
      if (data.weather[0].main === "Snow") {
        weatherimage.src="../../assets/images/snowflake.png"
      }
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null)
}
