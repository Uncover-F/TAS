import requests

def translate(text, source_lang, target_lang):
    response = requests.get('https://655.mtis.workers.dev/translate', params={"source_lang": source_lang, "target_lang": target_lang, "text": text})
    return response.json()["response"]["translated_text"]