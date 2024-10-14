# TAS Translation API

## IMPORTANT: LICENSE AGREEMENT - PLEASE READ!

### Important Notice

Before using the TAS Translation API, please review the [LICENSE](LICENSE) file thoroughly. By utilizing this API, you confirm that you have read, understood, and agree to adhere to the terms and conditions of the Apache License 2.0.

### YOU ASSUME ALL RISK

- By using this API, you release and hold harmless the authors and contributors from any claims, damages, or liabilities arising from your use of the API.
- You acknowledge that you have no claim against the authors or contributors for any damages or losses arising from your use of the API, including but not limited to loss of data, service interruptions, or any other technical issues.

### USE AT YOUR OWN RISK

- By accessing or using the TAS Translation API, you acknowledge that you have read and agree to be bound by the terms of the Apache License 2.0.
- The API is provided "as is" without any warranties or guarantees of any kind, express or implied.

### NO GUARANTEES ON PRIVACY OR RELIABILITY

- **PRIVACY WARNING**: This API is not designed to be privacy-focused. We cannot ensure the privacy or security of your data due to verification and moderation concerns. Do not use this API for any purposes that require privacy or confidentiality.
- **DATA EXPOSURE**: By using this API, you understand and agree that your data may be exposed to third parties. We are not responsible for any data breaches or unauthorized access to your information.
- **SERVICE INTERRUPTIONS**: The API may experience downtime, interruptions, or technical issues at any time. We do not guarantee continuous, uninterrupted access to the API.

### TERMS SUBJECT TO CHANGE

- We reserve the right to modify these terms and conditions at any time without prior notice.
- By continuing to use the API after any changes, you accept and agree to the revised terms.
- It is your responsibility to review the terms regularly to stay informed of any updates or modifications.

### LIMITATION OF LIABILITY

- To the maximum extent permitted by law, the authors and contributors shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services, loss of use, data, or profits, or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this API, even if advised of the possibility of such damage.

### DOCUMENTATION DISCLAIMER

- The documentation provided for the TAS Translation API is for informational purposes only. While we strive to ensure the accuracy and reliability of the information provided, the documentation may contain errors, inaccuracies, or outdated information.
- **NO WARRANTIES**: The authors and contributors make no guarantees, representations, or warranties, whether expressed or implied, about the completeness, accuracy, or reliability of the documentation or any content within it.
- **NO LIABILITY**: The authors and contributors shall not be held liable for any direct, indirect, incidental, special, exemplary, or consequential damages resulting from the use of or reliance on any information contained in the documentation, even if advised of the possibility of such damage.
- **USE AT YOUR OWN RISK**: Any reliance on the information provided in the documentation is strictly at your own risk. The authors and contributors do not assume any responsibility for errors, omissions, or inaccuracies, nor for any actions taken in reliance on the information provided.


---


This AI-based translation service is free (with limited accuracy, reliability, and privacy), requiring no sign-up. Our API supports various languages and utilizes `@cf/meta/m2m100-1.2b` for translation. We support programming languages such as C++, Python, JavaScript, ShellScript, Bash/Bat, or any language capable of making API requests/responses.

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/30169488-3bddcffe-555a-410f-be54-f7d8885da6aa?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30169488-3bddcffe-555a-410f-be54-f7d8885da6aa%26entityType%3Dcollection%26workspaceId%3Dec241a5e-dcf6-43f6-9283-579f930ba4f2)

## Limitations:
- Rate Limit: 4 Requests per second (20 Second Timeout)
- Maximum Input: 100 Characters
- Hard Rate Limit: 20 Requests per second (Auto Ban)
- No uptime guarantees 

## Features:
- Free (with limited accuracy, reliability, and privacy)
- No Sign-Up Required
- Open Source
- Actively Developed

## Anti-DDOS Policy
We oppose DDoS attacks and health checks as they hinder access for other users. We employ algorithms to block abusive IPs. If you believe your IP has been mistakenly blocked, please reach out to uncoverclimatix@duck.com or fill out the form linked below for reconsideration. Rate limiting ensures equitable access for all users. While we use caching to stabilize request logs, DDoS attacks may still lead to temporary service disruptions. In such cases, we have a backup endpoint for recovery. Persistent offenders may face permanent bans, which require evidence and review by human moderators. Automated systems cannot issue permanent bans, and attempts to evade bans may lead to further restrictions, including regional or user-agent bans in extreme circumstances. **Permanent bans will not be reversed under any condition.**

[Request Reconsideration](https://forms.office.com/r/WSkSsydcvm)

## To check uptime, please visit:
[Uptime Status](https://stats.uptimerobot.com/VCs8wjm8j5)

#### To prevent service interruptions, please refrain from using personal uptime monitoring systems.

# Usage:

For a list of supported languages, please refer to [languages.md](languages.md).  
**Emergency Endpoint:** ```https://emergency-tas-backup1.uncoverclimatix.workers.dev/``` (Functionality is the same, but libraries are not currently supported). This backup URL has a 7.5-second delay and a character input limit of 80. **Only use this if the primary endpoint is down.**

## Library Usage:
### PIP Python Usage
#### Note: The TAS package for PIP is fully operational.

PIP Package installation: ```pip install tastranslate```  
Usage: [Usage/Python/PIPUsage.py](Usage/Python/PIPUsage.py) 

### NPM NodeJS Usage
#### Note: The TAS package for NPM is in Public Beta and may not be fully stable.

NPM Package installation: ```npm install tastranslate```  
Usage: [Usage/JavaScript/NPMUsage.mjs](Usage/JavaScript/NPMUsage.mjs) (.mjs extension required)

## General Usage:
### Python Usage
For Python usage details, please see [Usage/Python/PyUsage.py](Usage/Python/PyUsage.py)

### JavaScript Usage
For JavaScript usage details, please see [Usage/JavaScript/JSUsage.js](Usage/JavaScript/JSUsage.js)

### HTML/WEB Usage
Due to CORS issues, you may need to use a CORS Proxy. For complete usage with a proxy, please see [Usage/HTMLUsage.html](Usage/HTMLUsage.html).  
#### Example Proxied Request Usage: ```https://api.allorigins.win/get?url=https%3A%2F%2F655.mtis.workers.dev%2Ftranslate%3Ftext%3DTell%2520me%2520a%2520joke%2520about%2520Cloudflare%26source_lang%3Den%26target_lang%3Dfr```

### CURL / General API Requests
To use other languages like C or C++, please refer to:
```
curl -X GET 'https://655.mtis.workers.dev/translate?text=Tell%20me%20a%20joke%20about%20Cloudflare&source_lang=en&target_lang=fr'
```

## Error Codes:
- **200**: Successful response.
- **400**: Incorrect or missing parameters / Resource not found.
- **403**: Access Denied to API.
- **429**: Rate Limit Reached.
- **500**: Internal server error. 
- **Worker Threw Exception**: Please notify us if you encounter this issue; you've discovered a bug!

# Contribution:
#### Note: To contribute or collaborate, please contact one of the following or create a pull request addressing an issue and its solution.
### Contact:
- (Forms) [Contribution Form](https://forms.office.com/r/EmXBrXp05Y)
- (GitHub) Raise an issue or participate in GitHub discussions.
- (Email) uncoverclimatix@duck.com
- (Discord) .0013500 - NOT ALWAYS AVAILABLE

#### Please note that responses on Discord may take several weeks.

# Other:
## Contact & Support:
- (GitHub) Raise an issue or engage in GitHub discussions.
- Uncover-F Discord Username: .0013500 (NOT ALWAYS AVAILABLE)

## Coming Soon:
- TAS Wiki

If you found this repository useful, please star it! You can also support us on Ko-Fi, helping to keep the project open source.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A0A411CJYS)

## Star History
[![Star History Chart](https://api.star-history.com/svg?repos=Uncover-F/TAS&type=Date)](https://star-history.com/#Uncover-F/TAS&Date)

## Goal:
If this repository receives more than 100 stars, we will consider developing one of the following API firmwares (free with limited accuracy, reliability and privacy):
- Speech to Text API Firmware/Software ```@cf/openai/whisper```
- Image Classification API Firmware/Software ```@cf/microsoft/resnet-50```
- Text Classification API Firmware/Software ```@cf/huggingface/distilbert-sst-2-int8```
- Text to Image API Firmware/Software ```@cf/stabilityai/stable-diffusion-xl-base-1.0```
- LLM API Firmware/Software ```@cf/meta/llama-3-8b-instruct```



