function initMap() {
  const myLocations = [
    {
      position: { lat: 41.7406, lng: -87.8045 }, // Bridgeview, IL
      title: "Bridgeview, IL",
      content: "<strong>Hometown:</strong> This is where I grew up."
    },
    {
      position: { lat: 41.7508, lng: -87.8181 }, // Moraine Valley CC
      title: "Moraine Valley Community College",
      content: "<strong>College:</strong> Earned my Associate Degree here."
    },
    {
      position: { lat: 41.8349, lng: -87.6270 }, // Illinois Tech
      title: "Illinois Institute of Technology",
      content: "<strong>Current University:</strong> Where I'm studying IT Management."
    }
  ];

  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.75, lng: -87.78 },
    zoom: 11,
    styles: [
      {
        elementType: "geometry",
        stylers: [{ color: "#ebe3cd" }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#523735" }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f1e6" }]
      }
    ]
  });

  myLocations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map: map,
      title: loc.title
    });

    const infoWindow = new google.maps.InfoWindow({
      content: loc.content
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
