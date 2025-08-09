const apiKey = '8d9429322a182b43aab7055bb63aa707';
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")


async function checkWeather(city) {

    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    var data = await response.json();
    console.log(data);

    //update text for the city & temp displayed on the app

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';



    
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});


