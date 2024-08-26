// Copyright 2024 Uncover-F
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
