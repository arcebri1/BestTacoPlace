var myMap = L.map("map", {
    center: [41.850033, -87.6500523],
    zoom: 4
  });
  
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

function amarkerSize(avg_capacity ) {
    return avg_capacity  * 3;
  }
  var WC = [
  {
    location: [34.0430, -118.2873],
    name: "Lakers",
    city:"Los Angeles",
    avg_capacity: 19060,
    arena_name : "Staples Center"
  },
  {
    location: [34.0430, -118.2873],
    name: "Clipers",
    city: "Los Angeles",
    avg_capacity: 19060,
    arena_name :"Staples Center"
  },
  {
    location: [45.5316, -122.6668],
    name: "Trail Blazers",
    city: "Portland",
    avg_capacity: 19980,
    arena_name :"Moda Center"
  },
  {
    location: [44.9531, -93.1651],
    name:" Timberwolves",
    city: "Minnesota",
    avg_capacity: 19356,
    arena_name : "Target Center"
  },
  {
    location: [29.7508, -95.3621],
    name: "Rockets",
    city: "Houston",
    avg_capacity: 18104,
    arena_name : "Toyota Center"
  },
  {
    location: [32.7904, -96.8103],
    name:"Mavericks",
    city: "Dallas",
    avg_capacity: 19200,
    arena_name :"American Airlines Center"
  },
  {
    location: [],
    name:"Warriors",
    city: "Golden State",
    avg_capacity: 19596,
    arena_name :"Chase Center"
  },
  {
    location: [40.6826, -73.9754],
    name:"Nets",
    city: "Brooklyn",
    avg_capacity:17732,
    arena_name :"Barclays Center"
  },
  {
    location: [39.7487, -105.0076],
    name:"Nuggets",
    city: "Denver",
    avg_capacity: 19099,
    arena_name :"Pepsi Center"
  },
  {
    location: [35.1381, -90.0506],
    name:"Grizzlies",
    city: "Memphis",
    avg_capacity: 18119,
    arena_name :"FedExForum"
  },
  {
    location: [29.9490, -90.0821],
    name:"Pelicans",
    city: "New Orleans",
    avg_capacity:17791,
    arena_name :"Smoothie King Center"
  },
  {
    location: [35.4634, -97.5151],
    name:"Thunder",
    city: "Oklahoma City",
    avg_capacity:19163,
    arena_name :"Chesapeake Energy Arena"
  },
  {
    location: [38.5802, -121.4997],
    name:"Kings",
    city: "Sacramento",
    avg_capacity: 17500,
    arena_name :"Golden 1 Center"
  },
  {
    location: [29.4270, -98.4375],
    name:"Spurs",
    city: "San Antonio",
    avg_capacity: 18694,
    arena_name :"AT&T Center"
  },
  {
    location: [40.7683, -111.9011],
    name:"Jazz",
    city: "Utah",
    avg_capacity: 20148,
    arena_name :"Vivint Smart Home Arena"
  },

  ];
  
  var EC = [
  {
    location: [35.2252, -80.8394],
    name: "Hornets",
    city: "Charlotte",
    avg_capacity: 19026,
    arena_name :"Spectrum center"
  },
  {
    location: [38.8981, -77.0208],
    name: "Wizards",
    city: "Washington",
    avg_capacity: 20647,
    arena_name : "Capital One Arena"
  },
  {
    location: [41.4966, -81.6881],
    name:"Cavaliers",
    city: "Cleveland",
    avg_capacity:20562 ,
    arena_name :"Quicken Loans Arena"
  },
  {
    location: [43.6435, -79.3791],
    name: "Raptors",
    city: "Toronto",
    avg_capacity: 19800,
    arena_name :"Scotiabank Arena"
  },
  {
    location: [41.8807, -87.6742],
    name:"Bulls",
    city: "Chicago",
    avg_capacity:21711,
    arena_name :"United Center"
  },
  {
    location: [39.7640, -86.1555],
    name:"Pacers",
    city: "Indiana",
    avg_capacity: 18345,
    arena_name :"Bankers Life Fieldhouse"
  },
  {
    location: [25.7814, -80.1870],
    name:"Heat",
    city: "Miami",
    avg_capacity: 19600,
    arena_name :"AmericanAirlines Arena"
  },
  {
    location: [43.0451, -87.9174],
    name:"Bucks",
    city: "Milwaukee",
    avg_capacity: 17500,
    arena_name :"Fiserv Forum"
  },
  {
    location: [40.7505, -73.9934],
    name:"Knicks",
    city: "New York",
    avg_capacity: 19763,
    arena_name :"Madison Square Garden"
  },
  {
    location: [28.5392, -81.3839],
    name:"Magic",
    city: "Orlando",
    avg_capacity:18846 ,
    arena_name :"Amway Center"
  },
  {
    location: [39.9012, -75.1720],
    name:"76ers",
    city: "Philadelphia",
    avg_capacity: 20478,
    arena_name :"Wells Fargo Center"
  },
  {
    location: [],
    name:"Suns",
    city: "Phoenix",
    avg_capacity:18422 ,
    arena_name :"Talking Stick Resort Arena"
  },
  {
    location: [33.7573, -84.3963],
    name:"Hawks",
    city: "Atlanta",
    avg_capacity: 18729,
    arena_name :"State Farm Arena"
  },
  {
    location: [42.3411, -83.0553],
    name:"Pistons",
    city: "Detroit",
    avg_capacity:21000 ,
    arena_name :"Little Caesars Arena"
  },
  {
    location: [42.3662, -71.0621],
    name:"Celtics",
    city: "Boston",
    avg_capacity:18624 ,
    arena_name :"TD Garden"
  },
  ];
  var WCcityMarkers = [];
  
  for (var i = 0; i < WC.length; i++) {
    var city = WC[i];
    WCcityMarkers.push(
    L.marker(city.location)
      .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Attendance Capacity: " + city.avg_capacity +"</h1> <hr> <h3>Arena Name: " + city.arena_name )
    );}
  
  var ECcityMarkers = [];
   
  for (var i = 0; i < EC.length; i++) {
    var city = EC[i];
    ECcityMarkers.push(
    L.marker(city.location)
      .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Attendance Capacity: " + city.avg_capacity +"</h1> <hr> <h3>Arena Name: " + city.arena_name )
    );}
  
  
  var WCCapacity = [];
  var ECCapacity = [];

  
  for (var i = 0; i < WC.length; i++) {
  
    // Conditionals for countries points
    var color = "";
    if (WC[i].avg_capacity > 20000) {
      color = "green";
    }
    else if (WC[i].avg_capacity > 15000) {
      color = "yellow";
    }
    else {
      color = "red"
    ;}
  
    
    var city = WC[i];
    WCCapacity.push(
      L.circle(city.location, {
        fillOpacity: 0.50,
        color: "white",
        fillColor: color,
        radius: amarkerSize(city.avg_capacity)
      })
    );}
  
  for (var i = 0; i < EC.length; i++) {
  
    var color = "";
    if (EC[i].avg_capacity > 20000) {
      color = "green";
    }
    else if (EC[i].avg_capacity > 15000) {
      color = "yellow";
    }
    else {
      color = "red"
    ;}
  
   
    var city = EC[i];
    ECCapacity.push(
    L.circle(city.location, {
      fillOpacity: 0.50,
      color: "white",
      fillColor: color,
      radius: amarkerSize(city.avg_capacity)
      })
    );}
  
  
   
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
  
  var EastC_Capacity = L.layerGroup(ECCapacity);
  var EastC_Team_Markers = L.layerGroup(ECcityMarkers);
  var WestC_Capacity = L.layerGroup(WCCapacity);
  var WestC_Team_Markers = L.layerGroup(WCcityMarkers);
  
  
  
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };
//   var overlayMaps = {
//     "East Coast ": EastC_Capacity,
//     "East Coast Teams": EastC_Team_Markers,
//     "West Coast ": WestC_Capacity,
//     "West Coast Teams": WestC_Team_Markers 
//   };
  
  var myMap = L.map("map", {
    center: [41.850033, -87.6500523],
    zoom: 4,
    layers: [streetmap, EastC_Capacity,  EastC_Team_Markers,
      WestC_Capacity,WestC_Team_Markers]
  });
  
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  