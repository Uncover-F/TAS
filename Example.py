from Translation.translator import translate

text = "Hello, world!"
source_lang = "en"
target_lang = "fr"

translation = translate(text, source_lang, target_lang)
print(translation)
