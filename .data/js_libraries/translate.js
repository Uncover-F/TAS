// Copyright 2024 Uncover-F

// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// JS Library for translating text using the TAS API
// https://github.com/Uncover-F/TAS

async function translateText(text, sourceLang, targetLang) {

    try {
        const endpointsResponse = await fetch(endpointsUrl);
        if (!endpointsResponse.ok) {
            throw new Error(`Error fetching endpoints: ${endpointsResponse.status} - ${endpointsResponse.statusText}`);
        }
        const endpointsData = await endpointsResponse.json();
        const endpoints = JSON.parse(endpointsData.contents);

        for (const endpoint of endpoints) {
            const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`${endpoint}?text=${encodeURIComponent(text)}&source_lang=${sourceLang}&target_lang=${targetLang}`)}`;
            try {
                const response = await fetch(apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    const parsedContents = JSON.parse(data.contents);
                    return parsedContents.response.translated_text;
                } else {
                    console.error(`Error at ${endpoint}: ${response.status} - ${response.statusText}`);
                }
            } catch (error) {
                console.error(`Request exception at ${endpoint}:`, error);
            }
        }
        throw new Error('All endpoints failed.');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default translateText;
