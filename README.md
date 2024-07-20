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
This AI-based translation is free, no signup required. Our API is available in many different languages and uses `@cf/meta/m2m100-1.2b` for translation. Programming languages we support: C++, Python, JavaScript, ShellScript, Bash/Bat or literally anything that supports API requests/responses. 

## Details/Features:
- 1.220 second latency
- Backup API
- Free
- No Sign Up
- Multiple Libraries
- Multiple Languages
- GET Request
- Public API

## Anti-DDOS Firmware
We are against DDOS attacks or health checks as they block others from using the API. We block IPs using algorithms. If you have been blocked an you think it's a mistake, you can always contact uncoverclimatix@duck.com to get pardoned. We use rate limiting for ensuring everyone can use our services. With that aside, we use caching to cache many requests to keep a stable log of requests to prevent as much AI usage as possible. Despite this, DDOS attacks can still happen and our services may be temporarily down, but we also have a backup endpoint to support DDOS recovery. If things get out of hand, we will manually and permanently ban DDOSers. Permanent bans can only happen with proof and with human moderators. Autoscan cannot give out permenent bans. Attempting to bypass these bans can result in being banned again or in extreme cases banning the reigon or useragent. (ONLY IN EXTREME CASES WHEN THE API IS TAKEN DOWN FOR MONTHS)
##### PERMENENT BANS WILL NOT BE PARDONED UNDER ANY CONDITION.

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


### CURL / General API requests
To use other languages like C or C++ please see:
```
curl -X GET 'https://655.mtis.workers.dev/translate?text=Tell%20me%20a%20joke%20about%20Cloudflare&source_lang=en&target_lang=fr'
```
# Contribution:
#### Note: To contribute/collaborate you will need to contact one of the following or create a pull request adressing a issue and it's solution.
### Contact:
- (Discord) .0013500
- (Email) uncoverclimatix@duck.com
# Other:
## Contact & Support:
Uncover-F Discord Username: .0013500
## Coming Soon:
- NodeJS Library (Beta Public Deployment)

Please star this repository is you found it useful. 
## Goal:
If this repository gets more than 100 stars, we may make 1 of the following (free):
- Free Speech to Text API ```@cf/openai/whisper```
- Free Image Classification API ```@cf/microsoft/resnet-50```
- Free Text Classification API  ```@cf/huggingface/distilbert-sst-2-int8```
- Free Text to Image API ```@cf/stabilityai/stable-diffusion-xl-base-1.0```
- Free LLM API ```@cf/meta/llama-3-8b-instruct```


