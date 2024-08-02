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

def get_endpoints():
    endpoints_url = 'https://raw.githubusercontent.com/Uncover-F/TAS/Uncover/.data/endpoints.json'
    try:
        response = requests.get(endpoints_url)
        response.raise_for_status()  # Raise exception for bad status
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f'Error fetching endpoints: {e}')
        return []

def translate(text, source_lang='en', target_lang='fr'):
    endpoints = get_endpoints()
    if not endpoints:
        return {'error': 'Failed to retrieve endpoints'}
    
    params = {
        'text': text,
        'source_lang': source_lang,
        'target_lang': target_lang
    }
    
    for endpoint in endpoints:
        try:
            response = requests.get(endpoint, params=params)
            response.raise_for_status()  # Raise exception for bad status
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f'Error at {endpoint}: {e}')
    
    return {'error': 'All endpoints failed'}