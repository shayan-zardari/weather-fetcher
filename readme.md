# Weather Fetcher

## What I Built

I built a simple weather application that lets users check current weather conditions for any city. The app uses HTML/CSS for the frontend, JavaScript for user interactions, and a Cloudflare Worker as the backend API that connects to WeatherAPI.com.

## Features

- Simple city search with an input field and button
- Current weather display showing temperature and conditions
- Error handling for invalid cities or API issues
- Responsive design that works on mobile and desktop
- Backend API proxy to securely handle API key management

## How to Run/Test Locally

1. Clone the repository and navigate to the project folder
2. Create a `.dev.vars` file with your WeatherAPI key: `WEATHER_API_KEY=your_key_here`
3. Run `npm install` to install dependencies
4. Start the local server with `npx wrangler dev`
5. Open in your browser
6. Enter a city name and click "Get Weather" to see results
7. Try both valid cities (like "London") and invalid entries to test error handling