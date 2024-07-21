// API Management Code
const requestTracker = {}; // Request Tracker
const cache = new Map(); // Cache for successful requests
const CACHE_LIMIT = 50000; // Define the cache size limit

// Initialize blocked IPs set
const blockedIPs = new Set();

// Function to add IPs to the blocked list
function addBlockedIP(ip) {
  if (typeof ip === 'string') {
    blockedIPs.add(ip);
    console.log(`IP ${ip} added to the blocked list.`);
  } else {
    console.error('Invalid IP address format.');
  }
}

// Add initial blocked IPs
addBlockedIP('143.208.36.161');
addBlockedIP('35.196.132.85');


// Time Sleep
function sleep(ms) {
return new Promise((resolve) => {
  setTimeout(resolve, ms);
});
}

// Discord Management
const discordWebhookUrl = 'WEBHOOK_URL';
async function sendToDiscord(message) {
  try {
    const response = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }),
    });

    if (!response.ok) {
      console.error('Failed to send message to Discord:', response.status, response.statusText);
      await sleep(1500)
    }
  } catch (error) {
    console.error('Error sending message to Discord:', error.message);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const params = url.searchParams;

    // Extract Input
    const text = params.get('text');
    const sourceLang = params.get('source_lang');
    const targetLang = params.get('target_lang');

    // Get client IP
    const clientIP = request.headers.get('CF-Connecting-IP');

    // Get request details
    const requestDetails = {
      method: request.method,
      url: request.url,
      headers: Object.fromEntries(request.headers),
      body: await request.text(),
    };

    // Checking if required parameters are missing
    if (!text || !sourceLang || !targetLang) {
      await sleep(1500)
      return new Response(JSON.stringify({ error: 'Missing required parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Anti-DDOS Firmware ----------------------------------------------

    // IP Blocking
    if (blockedIPs.has(clientIP)) {
      sendToDiscord(`Access denied for IP: ${clientIP} Content: ` + text);
      await sleep(1500)
      return new Response(JSON.stringify({ error: 'Access denied. Your IP has been banned. To appeal this ban please contact uncoverclimatix@duck.com.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }  

    // Rate Limiting
    const requestTime = Date.now();
    if (requestTracker[clientIP] && requestTracker[clientIP] > requestTime - 250) {
      sendToDiscord(`Rate limit exceeded for IP: ${clientIP}`);
      await sleep(1500)
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Try again later.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    requestTracker[clientIP] = requestTime;

    // Cache System
    const cacheKey = `${text}-${sourceLang}-${targetLang}`;
    if (cache.has(cacheKey)) {
      await sleep(1500)
      console.log('Cache hit for key:', cacheKey);
      sendToDiscord(`Cache hit for key: ${cacheKey}`);
      const cachedResponse = cache.get(cacheKey);
      cache.delete(cacheKey);
      cache.set(cacheKey, cachedResponse);
      return new Response(JSON.stringify({ inputs: { text, source_lang: sourceLang, target_lang: targetLang }, response: cachedResponse }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // AutoScan 
    if (request.headers.get('user-agent').includes("Uptime-Kuma")) {
      addBlockedIP(clientIP);
      await sleep(1500)
      sendToDiscord('IP Address blocked by AutoScan due to Uptime-Kuma useragent. IP ADRS=' + clientIP);
    }
    if (sourceLang.length != 2) {
      return new Response(JSON.stringify({ error: 'Invalid sourceLang.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (targetLang.length !=2) {
      return new Response(JSON.stringify({ error: 'Invalid targetLang.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }


    // ----------------------------------------------------------------------

    // Constructing inputs object
    const inputs = {
      text: text,
      source_lang: sourceLang,
      target_lang: targetLang,
    };

    // Main Loop
    try {
      if (blockedIPs.has(clientIP)) {
        sendToDiscord(`Access denied for IP: ${clientIP} Content: ` + text);
        console.log("AI is not being used.")
        await sleep(1500)
        return new Response(JSON.stringify({ error: 'Access denied. Your IP has been banned. To appeal this ban please contact shlok.mayur.o@gmail.com.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      else {
        const response = await env.AI.run('@cf/meta/m2m100-1.2b', inputs);
        console.log("AI is being used.")

        // Save the response to the cache
        cache.set(cacheKey, response);
        sendToDiscord('New CacheID: ' + cacheKey + '--' + response);

        // If cache size exceeds the limit, delete the oldest entry
        if (cache.size > CACHE_LIMIT) {
          const oldestKey = cache.keys().next().value;
          console.log('Cache limit exceeded, deleting oldest key:', oldestKey);
          cache.delete(oldestKey);
        }

        sendToDiscord(`Successful response from IP: ${clientIP}\n\nInputs: ${JSON.stringify(inputs)}\n\nResponse: ${JSON.stringify(response)} \n\n Request from IP: ${clientIP}\n\n${JSON.stringify(requestDetails, null, 2)}`);
        return new Response(JSON.stringify({ inputs, response }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }  
      
    } catch (error) {
      sendToDiscord(`Error for IP: ${clientIP}\n\nInputs: ${JSON.stringify(inputs)}\n\nError Message: ${error.message}`);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};
