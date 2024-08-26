# Copyright 2024 Uncover-F
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#     http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


import requests

# Define the Cloudflare Worker endpoint URL
worker_url = 'https://655.mtis.workers.dev/translate'

# Parameters for translation (customize as needed)
params = {
    'text': 'Tell me a joke about Cloudflare',  # Text to translate
    'source_lang': 'en',  # Source language code
    'target_lang': 'fr'   # Target language code
}

# Send GET request to the Cloudflare Worker endpoint
response = requests.get(worker_url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Print the JSON response (inputs and translation result)
    print(response.json())
else:
    print(f'Error: {response.status_code} - {response.text}')
