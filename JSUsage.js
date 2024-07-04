async function translateText() {
    const workerUrl = 'https://655.mtis.workers.dev/translate';
    
    // Parameters for translation (customize as needed)
    const params = {
        text: 'Tell me a joke about Cloudflare',  // Text to translate
        source_lang: 'en',  // Source language code
        target_lang: 'fr'   // Target language code
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
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to initiate translation
translateText();
