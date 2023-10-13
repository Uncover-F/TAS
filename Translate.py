import requests

# Define the API endpoint URL
api_url = "https://665.uncovernet.workers.dev/translate"

# Define the parameters for the request
params = {
    'text': 'Hello!',  # The text you want to translate
    'source_lang': 'en',    # Optional: The source language (defaults to English)
    'target_lang': 'fr'     # Optional: The target language (defaults to French)
}

# Send a GET request to the API
response = requests.get(api_url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Parse and print the response JSON
    data = response.json()
    print("Input:", data['inputs'])
    print("Response:", data['response'])
else:
    print("Error:", response.text)
