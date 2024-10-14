// Copyright 2024 Uncover-F
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// v1.2 OpenCode BETA
// https://github.com/Uncover-F/TAS

const requestTracker = {}; // Request Tracker
const Hard_requestTracker = {}; // Hard Request Tracker
const cache = new Map(); // Cache for successful requests
const CACHE_LIMIT = 500; // Define the cache size limit

// Initialize blocked IPs set
const blockedIPs = new Set();
const temporaryBanTracker = {}; // Temporary Ban Tracker

// Function to add IPs to the blocked list
function addBlockedIP(ip) {
  if (typeof ip === 'string') {
    blockedIPs.add(ip);
    console.log(`IP ${ip} added to the blocked list.`);
  } else {
    console.error('Invalid IP address format.');
  }
}

// Function to temporarily ban an IP for a specified duration
function temporarilyBanIP(ip, duration = 20000) {
  if (typeof ip === 'string') {
    const unbanTime = Date.now() + duration;
    temporaryBanTracker[ip] = unbanTime;
    console.log(`IP ${ip} temporarily banned until ${new Date(unbanTime).toLocaleTimeString()}.`);
  } else {
    console.error('Invalid IP address format.');
  }
}

// Add initial blocked IPs 
addBlockedIP('143.208.36.161');
addBlockedIP('35.196.132.85');
addBlockedIP('213.6.49.147');

// Time Sleep
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const params = url.searchParams;

    // Extract Input
    let text = params.get('text');
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
      await sleep(1500);
      return new Response(JSON.stringify({ error: 'Missing required parameters.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Enforce 100 character limit on text
    if (text.length > 100) {
      text = text.slice(0, 100);
    }

    // Anti-DDOS Firmware ----------------------------------------------

    // IP Blocking
    if (blockedIPs.has(clientIP)) {
      await sleep(3000);
      return new Response(JSON.stringify({ error: 'Access denied. Your IP has been banned. To appeal this ban please contact shlok.mayur.o@gmail.com.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if IP is temporarily banned
    const currentTime = Date.now();
    if (temporaryBanTracker[clientIP] && temporaryBanTracker[clientIP] > currentTime) {
      await sleep(1500);
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Try again later.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Rate Limiting
    const requestTime = Date.now();
    if (requestTracker[clientIP] && requestTracker[clientIP] > requestTime - 250) {
      temporarilyBanIP(clientIP);
      await sleep(1500);
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Try again later.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    requestTracker[clientIP] = requestTime;

    // Cache System
    const cacheKey = `${text}-${sourceLang}-${targetLang}`;
    if (cache.has(cacheKey)) {
      await sleep(1500);
      console.log('Cache hit for key:', cacheKey);
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
      await sleep(1500);
    }
    if (sourceLang.length != 2) {
      return new Response(JSON.stringify({ error: 'Invalid sourceLang.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (targetLang.length != 2) {
      return new Response(JSON.stringify({ error: 'Invalid targetLang.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const Hard_requestTime = Date.now();
    if (Hard_requestTracker[clientIP] && Hard_requestTracker[clientIP] > Hard_requestTime - 50) {
      addBlockedIP(clientIP);
      await sleep(1500);
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. You have been banned by AutoScan.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    Hard_requestTracker[clientIP] = Hard_requestTime;

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
        console.log("AI is not being used.");
        await sleep(5000);
        return new Response(JSON.stringify({ error: 'Access denied. Your IP has been banned. To appeal this ban please contact .' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        const response = await env.AI.run('@cf/meta/m2m100-1.2b', inputs);
        console.log("AI is being used.");

        // Save the response to the cache
        cache.set(cacheKey, response);

        // If cache size exceeds the limit, delete the oldest entry
        if (cache.size > CACHE_LIMIT) {
          const oldestKey = cache.keys().next().value;
          console.log('Cache limit exceeded, deleting oldest key:', oldestKey);
          cache.delete(oldestKey);
        }

        return new Response(JSON.stringify({ inputs, response }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};
