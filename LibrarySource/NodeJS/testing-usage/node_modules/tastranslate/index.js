// index.js
import fetch from 'node-fetch';

async function translateText(text, sourceLang = 'en', targetLang = 'fr') {
    const workerUrl = 'https://655.mtis.workers.dev/translate';
    
    // Parameters for translation (customize as needed)
    const params = {
        text,  // Text to translate
        source_lang: sourceLang,  // Source language code
        target_lang: targetLang   // Target language code
    };

    // Construct URL with query parameters
    const url = new URL(workerUrl);
    url.search = new URLSearchParams(params).toString();

    try {
        // Send GET request to the Cloudflare Worker endpoint
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default translateText;
