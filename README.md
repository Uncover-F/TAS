![alt text](https://github.com/Uncover-F/TAS/blob/Uncover/logo.jpg?raw=true)
# TAS Translation API

## IMPORTANT: LICENSE AGREEMENT
### Important Notice
Please read the [LICENSE](#) file carefully before using the TAS Translation API. By using this API, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions of the MIT License.

### YOU ASSUME ALL RISK

By using this API, you release and hold harmless the authors and contributors from any claims, damages, or liabilities arising from your use of the API. You also acknowledge that you have no claim against the authors or contributors for any damages or losses arising from your use of the API.

### USE AT YOUR OWN RISK

By accessing or using the TAS Translation API, you acknowledge that you have read and agree to be bound by the terms of the MIT License.

---

This is the revival of TAS translation API. We have not changed our old API endpoint for convenience, and our older products have not been taken down.
This AI-based translation is free (with limited accuracy and reliability), no signup required. Our API is available in many different languages and uses `@cf/meta/m2m100-1.2b` for translation. Programming languages we support: C++, Python, JavaScript, ShellScript, Bash/Bat or literally anything that supports API requests/responses. 

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/30169488-3bddcffe-555a-410f-be54-f7d8885da6aa?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30169488-3bddcffe-555a-410f-be54-f7d8885da6aa%26entityType%3Dcollection%26workspaceId%3Dec241a5e-dcf6-43f6-9283-579f930ba4f2)

## Details/Features:
- 1.220 second latency
- Backup API
- Free (with limited accuracy and reliability)
- No Sign Up
- Multiple Libraries
- GET Request
- Public API

## Anti-DDOS Firmware
We are against DDOS attacks or health checks as they block others from using the API. We block IPs using algorithms. If you have been blocked an you think it's a mistake, you can always contact uncoverclimatix@duck.com or fill in the form linked below to get pardoned. We use rate limiting for ensuring everyone can use our services. With that aside, we use caching to cache many requests to keep a stable log of requests to prevent as much AI usage as possible. Despite this, DDOS attacks can still happen and our services may be temporarily down, but we also have a backup endpoint to support DDOS recovery. If things get out of hand, we will manually and permanently ban DDOSers. Permanent bans can only happen with proof and with human moderators. Autoscan cannot give out permenent bans. Attempting to bypass these bans can result in being banned again or in extreme cases banning the reigon or useragent. (ONLY IN EXTREME CASES WHEN THE API IS TAKEN DOWN FOR MONTHS)
##### PERMENENT BANS WILL NOT BE PARDONED UNDER ANY CONDITION.

https://forms.office.com/r/WSkSsydcvm

# Usage:

For a list of supported languages please see [languages.md](#)<br>
##### Emergency Endpoint: ```https://emergency-tas-backup1.uncoverclimatix.workers.dev/``` (Usage is the same except libraries cannot currently be used). This is the emergency endpoint that has a 7.5 second delay and a 80 character input limit. This is the backup url for faults in the future. DO NOT USE THIS IF THE ORIGINAL ENDPOINT IS UP AND RUNNING.
## Library Usage:
### PIP Python Usage
#### Note: The TAS package for PIP is ready for full use.

PIP Package installation: ```pip install tastranslate``` <br>
Usage: [Usage/PIPUsage.py](#) 
### NPM NodeJS Usage
#### Note: The TAS package for NPM is in Public Beta and may not be stable.

NPM Package installation: ```npm install tastranslate``` <br>
Usage: [Usage/NPMUsage.mjs](#) (.mjs extention required)


## General Usage:
### Python Usage

For Python usage please see [Usage/PyUsage.py](#)


### Javascript Usage

For Javascript usage please see [Usage/JSUsage.js](#)

###  HTML/WEB Usage

For HTML or Web usage due to the CORS issue you may need to use a Cors Proxy. For full usage with proxy please see [Usage/HTMLUsage.html] (#)
#### Example Proxied Request Usage: ```https://api.allorigins.win/get?url=https%3A%2F%2F655.mtis.workers.dev%2Ftranslate%3Ftext%3DTell%2520me%2520a%2520joke%2520about%2520Cloudflare%26source_lang%3Den%26target_lang%3Dfr```

### CURL / General API requests
To use other languages like C or C++ please see:
```
curl -X GET 'https://655.mtis.workers.dev/translate?text=Tell%20me%20a%20joke%20about%20Cloudflare&source_lang=en&target_lang=fr'
```
## Error Codes:
- 200 Successful response
- 400 Incorrect or missing parameters. / Resource not found.
- 403 Access Denied to API.
- 429 Rate Limit Reached.
- 500 Internal server error. 

# Contribution:
#### Note: To contribute/collaborate you will need to contact one of the following or create a pull request adressing a issue and it's solution.
### Contact:
- (Forms) https://forms.office.com/r/EmXBrXp05Y
- (Discord) .0013500
- (Email) uncoverclimatix@duck.com
# Other:
## Contact & Support:
Uncover-F Discord Username: .0013500
## Coming Soon:
- Anti-DDOS Firmware (In Progress)

Please star this repository is you found it useful. 
## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Uncover-F/TAS&type=Date)](https://star-history.com/#Uncover-F/TAS&Date)
## Goal:
If this repository gets more than 100 stars, we may make 1 of the following (free with limited accuracy and reliability):
- Speech to Text API ```@cf/openai/whisper```
- Image Classification API ```@cf/microsoft/resnet-50```
- Text Classification API  ```@cf/huggingface/distilbert-sst-2-int8```
- Text to Image API ```@cf/stabilityai/stable-diffusion-xl-base-1.0```
- LLM API ```@cf/meta/llama-3-8b-instruct```


