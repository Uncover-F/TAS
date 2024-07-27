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