
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fbe64dfb2fmshb9c45faaddce860p1cefe6jsn13c41a290572',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let getWeather = (city) => {

    cityName.innerHTML = city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            // feels_like.innerHTML = response.feels_like
            // humidity.innerHTML = response.humidity
            max_temp.innerHTML = 45
            min_temp.innerHTML = 10
            // sunrise.innerHTML = response.sunrise
            // sunset.innerHTML = response.sunset
            // temp.innerHTML = response.temp
            temp1.innerHTML = 32
            // wind_degrees.innerHTML = response.wind_degrees
            // wind_speed.innerHTML = response.wind_speed
            // wind_speed1.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

}

submit.addEventListener('click', (e) =>
    {
        e.preventDefault();
        getWeather(city.value);
    } )

getWeather("Bhopal")