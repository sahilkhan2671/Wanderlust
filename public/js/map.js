
const mapContainer = document.getElementById("map");
const mapMessage = document.getElementById("map-message");

function showMapMessage(message) {
  if (mapMessage) {
    mapMessage.textContent = message;
  }
}

if (!mapContainer) {
  console.error("Map container #map was not found.");
} else if (typeof mapboxgl === "undefined") {
  showMapMessage("Mapbox could not load. Check your internet connection and Mapbox script.");
  console.error("Mapbox GL JS is not loaded.");
} else if (typeof mapToken === "undefined" || !mapToken) {
  showMapMessage("Map unavailable: the Mapbox access token is missing.");
  console.error("Missing MAP_TOKEN.");
} else {
  const coordinates = listing?.geometry?.coordinates;

  if (
    !Array.isArray(coordinates) ||
    coordinates.length !== 2 ||
    !coordinates.every(
      (coordinate) =>
        typeof coordinate === "number" && Number.isFinite(coordinate)
    )
  ) {
    showMapMessage(
      "Map unavailable: this listing does not have valid coordinates yet."
    );
    console.error(
      "Expected listing.geometry.coordinates as [longitude, latitude].",
      listing
    );
  } else {
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom: 12
    });

    new mapboxgl.Marker({ color: "#ff385c" })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setText(
          `${listing.title} — ${listing.location}`
        )
      )
      .addTo(map);

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", () => {
      showMapMessage("");
      map.resize();
    });

    map.on("error", (event) => {
      console.error("Mapbox error:", event.error);
      showMapMessage(
        "The map could not load. Check your Mapbox token and browser console."
      );
    });
  }
}
