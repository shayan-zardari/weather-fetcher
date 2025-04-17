export async function onRequestGet({ request, env }) {
    const requestUrl = new URL(request.url);
    const cityName = requestUrl.searchParams.get("city") || "New York City";
  
    const weatherApiKey = env.WEATHER_API_KEY;
  
    if (!weatherApiKey) {
      return new Response(JSON.stringify({ error: "API key configuration missing" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${encodeURIComponent(cityName)}`;
  
    try {
      const response = await fetch(weatherUrl);
      const weatherData = await response.json();
  
      if (!response.ok) {
        return new Response(JSON.stringify({ error: weatherData.error?.message || "Failed to retrieve weather" }), {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      return new Response(JSON.stringify(weatherData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Weather data fetch failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
}