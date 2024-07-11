from TrAS.translate import translate

def test_translate():
    assert "ERROR" not in translate("Tell me a joke about TAS", "en", "fr")
