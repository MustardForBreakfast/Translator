## Synopsis

A translation tool that leverages Google's speech recognition and translation APIs.

## Requirements

You will need to install the Google Cloud SDK on your system to use Google Cloud services - visit https://cloud.google.com/sdk/docs/ for more information. 

Once you've installed the SDK, you will need to create a set of application credentials. Run the following in your terminal:
- `gcloud auth application-default login`

Next, via the Google Cloud dashboard (https://console.cloud.google.com/home/dashboard), you will need to do the following: 
- create a Google Cloud project and obtain a projectID. Enable Billing.
- enable the Google Cloud Translation API and obtain an API key via the "Credentials" menu. 
- enable the Google Cloud Speech API 
- create a service account via the "Credentials" menu and generate/download a JSON keyFile for it. Save the keyFile to the project root directory as 'keyFile.json'. If you do not use a keyFile, the speech streaming will still work, but it will be unbearably slow to respond.

Sadly the translation API aint free. Thankfully, as of this writing, Google offers $300 in free credit on a trial account. So... free?

## Installation

- `brew install sox`, and add it to your PATH
- `npm install`
- copy and rename `ENV_template.js` to `ENV.js`, fill in the values you obtained in the `Requirements` section above.

## Execution
- `npm start`
