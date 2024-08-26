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

async function translateText() {
    const endpointsUrl = 'https://raw.githubusercontent.com/Uncover-F/TAS/Uncover/.data/endpoints.json';
    
    // Parameters for translation (customize as needed)
    const params = {
        text: 'Tell me a joke about Cloudflare',  // Text to translate
        source_lang: 'en',  // Source language code
        target_lang: 'fr'   // Target language code
    };

    try {
        // Get the list of endpoints
        const endpointsResponse = await fetch(endpointsUrl);
        if (!endpointsResponse.ok) {
            throw new Error(`Error fetching endpoints: ${endpointsResponse.status} - ${endpointsResponse.statusText}`);
        }
        const endpoints = await endpointsResponse.json();

        // Try each endpoint until one works
        let result = null;
        for (const endpoint of endpoints) {
            const url = new URL(endpoint);
            url.search = new URLSearchParams(params).toString();

            try {
                const response = await fetch(url);
                if (response.ok) {
                    result = await response.json();
                    break;
                } else {
                    console.error(`Error at ${url}: ${response.status} - ${response.statusText}`);
                }
            } catch (error) {
                console.error(`Request exception at ${url}:`, error);
            }
        }

        // Print the result or an error message
        if (result !== null) {
            console.log(result);
        } else {
            console.error('All endpoints failed.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to initiate translation
translateText();