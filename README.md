## Synopsis

A translation tool that leverages Google's speech recognition and translation APIs. Currently takes English input.

## Requirements

You will need to install the Google Cloud SDK on your system to use the translation and speech parsing APIs - visit https://cloud.google.com/sdk/docs/ for more information. Sadly the translation API aint free, but as of this writing, Google offers $300 in free credit on a trial account. So... still pretty free?

Once you've installed the SDK, you'll need to create a set of application credentials. Run the following in your terminal:
- `gcloud auth application-default login`

Next, via the Google Cloud dashboard (https://console.cloud.google.com/home/dashboard), you will need to do the following: 
- create a Google Cloud project and obtain a projectID. Enable Billing.
- enable the Google Cloud Translation API and obtain an API key via the "Credentials" menu. 
- enable the Google Cloud Speech API 
- create a service account via the "Credentials" menu and generate/download a JSON keyFile for it. Save the keyFile to the project root directory as '_keyFile.json'. If you do not use a keyFile, the speech streaming will still work, but the API will be unbearably slow to respond.

## Installation

- `brew install sox`, and add it to your PATH
- `npm install`
- copy and rename `ENV_template.js` to `ENV.js`, fill in any values you obtained in the `Requirements` section above.

## Execution
- `npm start`, wait for "Google is listening..." in the terminal, and start sayin stuff!

## Tips
- For best results, go somewhere quiet.
- Pause occasionally while speaking. Your input will be chunked more often and you will receive results more quickly and continuosly.
- Use headphones to prevent the app from attempting to retranslate its own speech.
- The API cuts you off after 60 seconds, so that is your maximum talk time per run.
