async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
      alert('Please enter a city name');
      return;
    }
    
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await response.json();
      
      if (data.error) {
        document.getElementById('weatherResult').innerText = data.error;
      } else {
        document.getElementById('weatherResult').innerText = 
          `Weather in ${data.location.name}: ${data.current.condition.text}, ${data.current.temp_c}°C`;
      }
    } catch (error) {
      document.getElementById('weatherResult').innerText = 'Error fetching weather data';
    }
}