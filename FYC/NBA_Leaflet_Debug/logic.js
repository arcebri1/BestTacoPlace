function amarkerSize(avg_capacity) {
  return avg_capacity * 5;
}

let WC = [{
  location: [34.052235, -118.243683],
  name: "Lakers",
  // city: "Los Angeles",
  avg_capacity: 19060,
  arena_name: "Staples Center"
},
{
  location: [34.052235, -118.243683],
  name: "Clipers",
  // city: "Los Angeles",
  avg_capacity: 19060,
  arena_name: "Staples Center"
},
{
  location: [45.5316, -122.6668],
  name: "Trail Blazers",
  // city: "Portland",
  avg_capacity: 19980,
  arena_name: "Moda Center"
},
{
  location: [44.9531, -93.1651],
  name: "Timberwolves",
  // city: "Minnesota",
  avg_capacity: 19356,
  arena_name: "Target Center"
},
{
  location: [29.7508, -95.3621],
  name: "Rockets",
  // city: "Houston",
  avg_capacity: 18104,
  arena_name: "Toyota Center"
},
{
  location: [32.7904, -96.8103],
  name: "Mavericks",
  // city: "Dallas",
  avg_capacity: 19200,
  arena_name: "American Airlines Center"
},
{
  location: [39.754185, -105.230484],
  name: "Warriors",
  // city: "Golden State",
  avg_capacity: 19596,
  arena_name: "Chase Center"
},
{
  location: [40.6826, -73.9754],
  name: "Nets",
  // city: "Brooklyn",
  avg_capacity: 17732,
  arena_name: "Barclays Center"
},
{
  location: [39.7487, -105.0076],
  name: "Nuggets",
  // city: "Denver",
  avg_capacity: 19099,
  arena_name: "Pepsi Center"
},
{
  location: [35.1381, -90.0506],
  name: "Grizzlies",
  // city: "Memphis",
  avg_capacity: 18119,
  arena_name: "FedExForum"
},
{
  location: [29.9490, -90.0821],
  name: "Pelicans",
  // city: "New Orleans",
  avg_capacity: 17791,
  arena_name: "Smoothie King Center"
},
{
  location: [35.4634, -97.5151],
  name: "Thunder",
  // city: "Oklahoma City",
  avg_capacity: 19163,
  arena_name: "Chesapeake Energy Arena"
},
{
  location: [38.5802, -121.4997],
  name: "Kings",
  // city: "Sacramento",
  avg_capacity: 17500,
  arena_name: "Golden 1 Center"
},
{
  location: [29.4270, -98.4375],
  name: "Spurs",
  // city: "San Antonio",
  avg_capacity: 18694,
  arena_name: "AT&T Center"
},
{
  location: [40.7683, -111.9011],
  name: "Jazz",
  // city: "Utah",
  avg_capacity: 20148,
  arena_name: "Vivint Smart Home Arena"
}];

let EC = [
  {
  location: [35.227085, -80.843124],
  name: "Hornets",
  // city: "Charlotte",
  avg_capacity: 19026,
  arena_name: "Spectrum center"
},
{
  location: [47.751076, -120.740135],
  name: "Wizards",
  // city: "Washington",
  avg_capacity: 20647,
  arena_name: "Capital One Arena"
},
{
  location: [41.505493, -81.681290],
  name: "Cavaliers",
  // city: "Cleveland",
  avg_capacity: 20562,
  arena_name: "Quicken Loans Arena"
},
{
  location: [43.651070, -79.347015],
  name: "Raptor",
  // city: "Toronto",
  avg_capacity: 19800,
  arena_name: "Scotiabank Arena"
},
{
  location: [41.881832, -87.623177],
  name: "Bulls",
  // city: "Chicago",
  avg_capacity: 21711,
  arena_name: "United Center"
},
{
  location: [40.273502, -86.126976],
  name: "Pacers",
  // city: "Indiana",
  avg_capacity: 18345,
  arena_name: "Bankers Life Fieldhouse"
},
{
  location: [25.761681, -80.191788],
  name: "Heat",
  // city: "Miami",
  avg_capacity: 19600,
  arena_name: "AmericanAirlines Arena"
},
{
  location: [43.038902, -87.906471],
  name: "Bucks",
  // city: "Milwaukee",
  avg_capacity: 17500,
  arena_name: "Fiserv Forum"
},
{
  location: [40.730610, -73.935242],
  name: "Knicks",
  // city: "New York",
  avg_capacity: 19763,
  arena_name: "Madison Square Garden"
},
{
  location: [28.538336, -81.379234],
  name: "Magic",
  // city: "Orlando",
  avg_capacity: 18846,
  arena_name: "Amway Center"
},
{
  location: [39.952583, -75.165222],
  name: "76ers",
  // city: "Philadelphia",
  avg_capacity: 20478,
  arena_name: "Wells Fargo Center"
},
{
  location: [33.448376, -112.074036],
  name: "Suns",
  // city: "Phoenix",
  avg_capacity: 18422,
  arena_name: "Talking Stick Resort Arena"
},
{
  location: [33.753746, -84.386330],
  name: "Hawks",
  // city: "Atlanta",
  avg_capacity: 18729,
  arena_name: "State Farm Arena"
},
{
  location: [42.331429, -83.045753],
  name: "Pistons",
  // city: "Detroit",
  avg_capacity: 21000,
  arena_name: "Little Caesars Arena"
},
{
  location: [42.361145, -71.057083],
  name: "Celtics",
  // city: "Boston",
  avg_capacity: 18624,
  arena_name: "TD Garden"
}];

let WCcityMarkers = [];

for (let i = 0; i < WC.length; i++) {
  let city = WC[i];
  WCcityMarkers.push(
    L.marker(city.location)
      .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Attendance Capacity: " + city.avg_capacity + "</h1> <hr> <h3>Arena Name: " + city.arena_name)
  );
}

let ECcityMarkers = [];

for (let i = 0; i < EC.length; i++) {
  let city = EC[i];
  ECcityMarkers.push(
    L.marker(city.location)
      .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Attendance Capacity: " + city.avg_capacity + "</h1> <hr> <h3>Arena Name: " + city.arena_name)
  );
}

let WCCapacity = [];

for (let i = 0; i < WC.length; i++) {

  let color = "";
  if (WC[i].avg_capacity > 20000) {
    color = "green";
  }
  else if (WC[i].avg_capacity > 18000) {
    color = "yellow";
  }
  else {
    color = "red"
      ;
  }

  let city = WC[i];
  WCCapacity.push(
    L.circle(city.location, {
      fillOpacity: 0.50,
      color: "white",
      fillColor: color,
      radius: amarkerSize(city.avg_capacity)
    })
  );
}

let ECCapacity = [];

for (let i = 0; i < EC.length; i++) {

  let color = "";
  if (EC[i].avg_capacity > 20000) {
    color = "green";
  }
  else if (EC[i].avg_capacity > 18000) {
    color = "yellow";
  }
  else {
    color = "red"
      ;
  }

  let city = EC[i];
  ECCapacity.push(
    L.circle(city.location, {
      fillOpacity: 0.50,
      color: "white",
      fillColor: color,
      radius: amarkerSize(city.avg_capacity)
    })
  );
}

var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});

let WestC_Team_Markers = L.layerGroup(WCcityMarkers);
let WestC_Capacity = L.layerGroup(WCCapacity);
let EastC_Team_Markers = L.layerGroup(ECcityMarkers);
let EastC_Capacity = L.layerGroup(ECCapacity);

let baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

let overlayMaps = {
  "West Coast Teams": WestC_Team_Markers,
  "West Coast Capacity": WestC_Capacity,
  "East Coast Teams": EastC_Team_Markers,
  "East Coast Capacity": EastC_Capacity
};

let myMap = L.map("map", {
  center: [37.8, -96],
  zoom: 4,
  layers: [streetmap, WestC_Team_Markers, WestC_Capacity, 
    EastC_Team_Markers, EastC_Capacity]
});

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
