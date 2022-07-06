async function detectCurrentUserLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      return await callback([
        position.coords.latitude,
        position.coords.longitude,
      ]);
    });
  } else {
    callback("Geolocation is not available", null);
  }
}

export default detectCurrentUserLocation;
