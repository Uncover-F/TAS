import requests

def translate(text, source_lang='en', target_lang='fr'):
    worker_url = 'https://655.mtis.workers.dev/translate'
    params = {
        'text': text,
        'source_lang': source_lang,
        'target_lang': target_lang
    }
    
    try:
        response = requests.get(worker_url, params=params)
        response.raise_for_status()  # Raise exception for bad status
        return response.json()
    except requests.exceptions.RequestException as e:
        return {'error': str(e)}
