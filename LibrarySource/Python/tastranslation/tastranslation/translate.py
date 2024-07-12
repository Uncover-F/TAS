import requests

def translate(text, source_lang='en', target_lang='fr'):
    primary_worker_url = 'https://655.mtis.workers.dev/translate'
    fallback_worker_url = 'https://emergency-tas-backup1.uncoverclimatix.workers.dev/translate'
    params = {
        'text': text,
        'source_lang': source_lang,
        'target_lang': target_lang
    }
    
    try:
        response = requests.get(primary_worker_url, params=params)
        response.raise_for_status()  # Raise exception for bad status
        return response.json()
    except requests.exceptions.RequestException:
        try:
            response = requests.get(fallback_worker_url, params=params)
            response.raise_for_status()  # Raise exception for bad status
            return response.json()
        except requests.exceptions.RequestException as e:
            return {'error': str(e)}
