import React from 'react';

//const api = {
  //key: "d9d611c666683abfb5eec0d477c9d26f",
  //base: "https://api.openweathermap.org/data/2.5/"
//}

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
  return (
    <div className="app hot">
       <main>
          <div className="search-box">
              <input
              type="text" 
              className="search-bar"
              placeholder="Search..." 
              />
          </div>
          <div className="location-box">
           <div className="location">LONDON , UK</div>
           <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15*C
            </div>
          </div>
          <div className="weather">
            Sunny
          </div>
        </main>
    </div>
  );
}

export default App;
