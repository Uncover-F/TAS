# TAS Translation API

## IMPORTANT: LICENSE AGREEMENT - PLEASE READ!

### Important Notice

Please read the [LICENSE](LICENSE) file carefully before using the TAS Translation API. By using this API, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions of the Apache License 2.0.

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


This AI-based translation is free (with limited accuracy, reliability and privacy), no signup required. Our API is available in many different languages and uses `@cf/meta/m2m100-1.2b` for translation. Programming languages we support: C++, Python, JavaScript, ShellScript, Bash/Bat or literally anything that supports API requests/responses. 

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/30169488-3bddcffe-555a-410f-be54-f7d8885da6aa?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30169488-3bddcffe-555a-410f-be54-f7d8885da6aa%26entityType%3Dcollection%26workspaceId%3Dec241a5e-dcf6-43f6-9283-579f930ba4f2) 

## Limitations:
- Rate Limit (4 Requests per second) = 20 Second Timeout
- 100 Character Input
- Hard Rate Limit (20 Requests per second) = Auto Ban
- No uptime guaranties 

## Features:
- Free (with limited accuracy, reliability and privacy)
- No Sign Up
- Open Source
- Active development

## Anti-DDOS Firmware
We are against DDOS attacks or health checks as they block others from using the API. We block IPs using algorithms. If you have been blocked and you think it's a mistake, you can always contact uncoverclimatix@duck.com or fill in the form linked below to get pardoned. We use rate limiting for ensuring everyone can use our services. With that aside, we use caching to cache many requests to keep a stable log of requests to prevent as much AI usage as possible. Despite this, DDOS attacks can still happen and our services may be temporarily down, but we also have a backup endpoint to support DDOS recovery. If things get out of hand, we will manually and permanently ban DDOSers. Permanent bans can only happen with proof and with human moderators. Autoscan cannot give out permenent bans. Attempting to bypass these bans can result in being banned again or in extreme cases banning the reigon or useragent. (ONLY IN EXTREME CASES WHEN THE API IS TAKEN DOWN FOR MONTHS)
##### PERMENENT BANS WILL NOT BE PARDONED UNDER ANY CONDITION.

https://forms.office.com/r/WSkSsydcvm

## To check uptime, please check here:
https://stats.uptimerobot.com/VCs8wjm8j5

#### To prevent the API from going down, please refrain from using your own uptime check system.

# Usage:

For a list of supported languages please see [languages.md](languages.md)<br>
##### Emergency Endpoint: ```https://emergency-tas-backup1.uncoverclimatix.workers.dev/``` (Usage is the same except libraries cannot currently be used). This is the emergency endpoint that has a 7.5 second delay and a 80 character input limit. This is the backup url for faults in the future. DO NOT USE THIS IF THE ORIGINAL ENDPOINT IS UP AND RUNNING.
## Library Usage:
### PIP Python Usage
#### Note: The TAS package for PIP is ready for full use.

PIP Package installation: ```pip install tastranslate``` <br>
Usage: [Usage/Python/PIPUsage.py](Usage/Python/PIPUsage.py) 
### NPM NodeJS Usage
#### Note: The TAS package for NPM is in Public Beta and may not be stable.

NPM Package installation: ```npm install tastranslate``` <br>
Usage: [Usage/JavaScript/NPMUsage.mjs](Usage/JavaScript/NPMUsage.mjs) (.mjs extention required)


## General Usage:
### Python Usage

For Python usage please see [Usage/Python/PyUsage.py](Usage/Python/PyUsage.py)


### Javascript Usage

For Javascript usage please see [Usage/JavaScript/JSUsage.js](Usage/JavaScript/JSUsage.js)

###  HTML/WEB Usage

For HTML or Web usage due to the CORS issue you may need to use a CORS Proxy. For full usage with proxy please see [Usage/HTMLUsage.html](Usage/HTMLUsage.html)
#### Example Proxied Request Usage: ```https://api.allorigins.win/get?url=https%3A%2F%2F655.mtis.workers.dev%2Ftranslate%3Ftext%3DTell%2520me%2520a%2520joke%2520about%2520Cloudflare%26source_lang%3Den%26target_lang%3Dfr```

### CURL / General API requests
To use other languages like C or C++ please see:
```
curl -X GET 'https://655.mtis.workers.dev/translate?text=Tell%20me%20a%20joke%20about%20Cloudflare&source_lang=en&target_lang=fr'
```
## Error Codes:
- 200 Successful response.
- 400 Incorrect or missing parameters. / Resource not found.
- 403 Access Denied to API.
- 429 Rate Limit Reached.
- 500 Internal server error. 
- Worker Threw Exception -  Please tell us if you get this issue, you have just discovered a bug!

# Contribution:
#### Note: To contribute/collaborate you will need to contact one of the following or create a pull request adressing a issue and it's solution.
### Contact:
- (Forms) https://forms.office.com/r/EmXBrXp05Y
- (GitHub) You can raise an issue or use GitHub discussions.
- (Email) uncoverclimatix@duck.com
- (Discord) .0013500 - NOT AVALABLE AT ALL TIMES

#### Please note that we may not be readily available on discord and it may take a few weeks for us to see it. 

# Other:
## Contact & Support:
- (GitHub) You can raise an issue or use GitHub discussions.
- Uncover-F Discord Username: .0013500 (NOT AVALABLE AT ALL TIMES)
## Coming Soon:
- ...

Please star this repository is you found it useful. You can also donate on Ko-Fi, it helps keep the project opensource!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A0A411CJYS)
## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Uncover-F/TAS&type=Date)](https://star-history.com/#Uncover-F/TAS&Date)
## Goal:
If this repository gets more than 100 stars, we MAY attempt to make 1 of the following API firmwares (free with limited accuracy, reliability and privacy):
- Speech to Text API Firmware/Software ```@cf/openai/whisper```
- Image Classification API Firmware/Software ```@cf/microsoft/resnet-50```
- Text Classification API Firmware/Software ```@cf/huggingface/distilbert-sst-2-int8```
- Text to Image API Firmware/Software ```@cf/stabilityai/stable-diffusion-xl-base-1.0```
- LLM API Firmware/Software ```@cf/meta/llama-3-8b-instruct```



