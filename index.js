// const http = require("http");
// const fs = require("fs");
// var requests = require("requests");
// const { log } = require("console");

// const homeFile = fs.readFileSync("home.html", "utf-8");

// const replaceVal = (tempVal, orgVal) => {
//   let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
//   temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
//   temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
//   temperature = temperature.replace("{%location%}", orgVal.name);
//   temperature = temperature.replace("{%country%}", orgVal.sys.country);
//   temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

//   return temperature;
// };

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     requests(
//       "http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263"
//     )
//       .on("data", (chunk) => {
//         const objdata = JSON.parse(chunk);
//         const arrData = [objdata];
//         // console.log(arrData[0].main.temp);
//         const realTimeData = arrData
//           .map((val) => replaceVal(homeFile, val))
//           .join("");
//         res.write(realTimeData);
//         // console.log(realTimeData);/

//       })
//       .on("end", (err) => {
//         if (err) return console.log("connection closed due to errors", err);
//         res.end();
//       });
//   } else {
//     res.end("File not found");
//   }
// });

// server.listen(8000, "127.0.0.1");





// const curDate = document.getElementById("date");
// let weathercon = document.getElementById("weathercon");

// const tempStatus = "{%tempstatus%}";

// //condition to check sunny or cloudy
// if (tempStatus == "Sunny") {
//   weathercon.innerHTML =
//     "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
// } else if (tempStatus == "Clouds") {
//   weathercon.innerHTML =
//     "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
// } else if (tempStatus == "Rainy") {
//   weathercon.innerHTML =
//     "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
// } else {
//   weathercon.innerHTML =
//     "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
// }

// const getCurrentDay = () => {
//   var weekday = new Array(7);
//   weekday[0] = "Sunday";
//   weekday[1] = "Monday";
//   weekday[2] = "Tue";
//   weekday[3] = "Wed";
//   weekday[4] = "Thursday";
//   weekday[5] = "Friday";
//   weekday[6] = "Saturday";

//   let currentTime = new Date();
//   let day = weekday[currentTime.getDay()];
//   return day;
// };

// const getCurrentTime = () => {
//   var months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "June",
//     "July",
//     "Aug",
//     "Sept",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   var now = new Date();
//   var month = months[now.getMonth() ];
//   var date = now.getDate();

//   let hours = now.getHours();
//   let mins = now.getMinutes();

//   let periods = "AM";

//   if (hours > 11) {
//     periods = "PM";
//     if (hours > 12) hours -= 12;
//   }
//   if (mins < 10) {
//     mins = "0" + mins;
//   }

//   return `${month} ${date} | ${hours}:${mins}${periods}`;
// };



// curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();



var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const d = new Date()
document.getElementById("day").innerHTML = weekday[d.getDay()];
document.getElementById("hour").innerHTML = d.getHours();
document.getElementById("minute").innerHTML = d.getMinutes();
document.getElementById("month").innerHTML = months[d.getMonth()];
document.getElementById("din").innerHTML = d.getDate();
document.getElementById('ampm').innerHTML=  d.getHours() >= 12 ? 'pm' : 'am';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fbe64dfb2fmshb9c45faaddce860p1cefe6jsn13c41a290572',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
console.log("HELLO")
let getWeather = (city) => {

    cityName.innerHTML = city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            // feels_like.innerHTML = response.feels_like
            // humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            // sunrise.innerHTML = response.sunrise
            // sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            // wind_degrees.innerHTML = response.wind_degrees
            // wind_speed.innerHTML = response.wind_speed
            // wind_speed1.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

}

// submit.addEventListener('click', (e) =>
//     {
//         e.preventDefault();
//         getWeather(city.value);
//     } )

getWeather("Bhopal")