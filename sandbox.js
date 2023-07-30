const key = '46b40c8bcfb67fc5f88939b1704025b9';
const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
const sreach0input = document.querySelector('.search input')
const fsreach0button = document.querySelector('.search button')
const icon = document.querySelector('.icon')


async function checkWeather(city){
    const res = await fetch (url + city +`&appid=${key}`);
    var data = await res.json();
    console.log(data);

    if(res.status== '404'){
        document.querySelector('.err').style.display ="block";
        document.querySelector('.weather').style.display ="none";
    }else{
        const cityName = document.querySelector('.city');
        cityName.innerHTML=data.name;

        const temp = document.querySelector('.degree');
        temp.innerHTML= Math.round(data.main.temp) + '&deg;c';

        const humidity = document.querySelector('.humidity');
        humidity.innerHTML= data.main.humidity  + ' %';

        const wind= document.querySelector('.wind');
        wind.innerHTML=data.wind.speed + ' KM/H';

        if(data.weather[0].main=='Clouds'){
            icon.src= "images/clouds.png";
        }else if(data.weather[0].main=='Clear'){
            icon.src= "images/clear.png";
        }else if(data.weather[0].main=='Drizzle'){
            icon.src= "images/drizzle.png";
        }else if(data.weather[0].main=='Mist'){
            icon.src= "images/mist.png";
        }else if(data.weather[0].main=='Rain'){
            icon.src= "images/rain.png";
        }else if(data.weather[0].main=='Snow'){
            icon.src= "images/snow.png";
        }

        const weather = document.querySelector('.weather');
        weather.style.display = "block";
        document.querySelector('.err').style.display ="none";
    }
}
    

fsreach0button.addEventListener('click', ()=>{
    checkWeather(sreach0input.value);
})

