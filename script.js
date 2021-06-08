let weatherApiOne = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=54654b2970f4ff24c637b2ecba8f2f9f"

let weatherSearch = function() {
    fetch(weatherApiOne)
    .then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
})};