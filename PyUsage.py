import requests

# Define the Cloudflare Worker endpoint URL
worker_url = 'https://665.mtis.workers.dev/translate?'

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
