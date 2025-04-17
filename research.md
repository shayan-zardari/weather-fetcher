# Cloudflare Research

# What is a Cloudflare Worker?
Cloudflare Workers are serverless JavaScript functions. Just like AWS's Lambda, except that Workers run on Cloudflare's edge network. An edge network lets developers run code close to users.

# How does a Worker handle HTTP requests and return responses?
Workers get HTTP requests at the CDN, and run JavaScript code to process them, and return response objects with custom headers, status codes, and content.

# What is Cloudflare D1? What are some pros and cons of using it?
D1 is Cloudflare's serverless SQL database based on SQLite. Since it is severless, it scales in and out automatically. Also it provides low latency response too. However, there are cons such as limited query support and smaller capacity than traditional databases.

# How does client-side JavaScript call an external API?
Client-side JS uses fetch or XMLHttpRequest Object to send HTTP requests to APIs. It handles responses using promises or callbacks and deals with CORS requirements.

# What is the benefit of deploying APIs to the edge instead of traditional servers?
Edge APIs reduce latency by running closer to users. They're more reliable, scale automatically with traffic, and usually cost less than maintaining regular servers.
