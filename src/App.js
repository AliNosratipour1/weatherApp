import React,  { useState} from 'react';

const api = {
  key: "e7deb0763cbefe283f1edd43deba96db",
  base: "https://api.openweathermap.org/data/2.5/"
}

const dateBuilder = (d) =>{
let months = ["January", "February", "March", "April", "May",
"June", "July","August", "September", "October","November","December"];
let Days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday" ,"Satarday"];

let day = Days[d.getDay()];
let date= d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
return `${day} ${date} ${month} ${year}`

}
function App() {

  const [query , setQuery] = useState(''); 
  const [weather , setWeather] = useState({}); 


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
        
        });
    }
  }
  return (
    <div className={(typeof weather.main != "undefined")
      ? ((weather.main.temp > 10) 
      ? 'app hot' 
      : 'app')
      : 'app'}>
       <main>
          <div className="search-box">
              <input
              type="text" 
              className="search-bar"
              placeholder="Search..." 
              onChange={e => setQuery(e.target.value)}
              value ={query}
              onKeyPress={search}
              />
          </div>
          
          {(typeof weather.main != "undefined") ? (
             <div>
             <div className="location-box">
           <div className="location">{weather.name}, {weather.sys.country}</div>
           <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
            {Math.round(weather.main.temp)}°C
            
          </div>
          <div className="weather"> {weather.weather[0].main}</div>
          </div>
             </div>
               ) : ('') }
          </main>
    </div>
  );
}

export default App;
