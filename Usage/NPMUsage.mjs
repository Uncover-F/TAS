import translateText from 'tastranslate';

async function runTranslation() {
    try {
        const result = await translateText('Tell me a joke about TAS', 'en', 'fr');
        console.log('Translation:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

runTranslation();
