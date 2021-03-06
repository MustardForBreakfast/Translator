## Synopsis

A spoken-word translation tool that leverages Google's speech recognition and translation APIs.

## Requirements

#### 1) A device running MacOS
Translator currently depends on apple's built-in `say` command to vocalize results.

#### 2) The Google Cloud SDK
You will need to install the Google Cloud SDK on your system to use the translation and speech parsing APIs - visit https://cloud.google.com/sdk/docs/ for more information.

#### 3) Google Cloud application credentials
Once you've installed the SDK, you'll need to create a set of application credentials. Sadly the translation API aint free, but as of this writing, Google offers $300 in free credit on a trial account. So... still pretty free? 

Run the following in your terminal:
- `gcloud auth application-default login`

Next, via the Google Cloud dashboard (https://console.cloud.google.com/home/dashboard), you will need to do the following: 
- create a Google Cloud project and obtain a projectID. Enable Billing.
- enable the Google Cloud Translation API and obtain an API key via the "Credentials" menu. 
- enable the Google Cloud Speech API.
- create a service account via the "Credentials" menu and generate/download a JSON keyFile for it. Save the keyFile to the project root directory as `_keyFile.json`. If you do not use a keyFile, the speech streaming will still work, but the API will be unbearably slow to respond.

## Installation

- `brew install sox`, and add it to your PATH
- `npm install`
- copy and rename `ENV_template.js` to `ENV.js`, fill in any values you obtained in the `Requirements` section above.

## Usage
- Select your input and output langages and `expectANovel` setting in `config.js`.
- run `npm start`, wait for "Translator is listening..." in the terminal, and start sayin stuff!

## Tips
- For best results, go somewhere quiet.
- If you are in a quiet space, the app should stop listening to you after 2 seconds of silence. If you're somewhere noisey, it will keep listening until 15 seconds have gone by or until you shut it down (`ctrl c`).
- The API cuts you off after 60 seconds - thats your maximum talk time per run.
- If the mic is too sensetive / not sensetive enough, adjust `voiceThreshold` in `constants.js`.

#### When using "Expect a Novel" mode:
- Pause occasionally while speaking. Your input will be chunked more often and you will receive results more quickly and continuosly.
- Use headphones (or a separate microphone) to prevent the app from attempting to retranslate its own speech from the speaker output.
- If you are in a quiet space, the app should stop listening to you after 5 seconds of silence. If you are somewhere noisey, you will have to shut it down manually when you are done speeking (`ctrl c`).
- 60 seconds is still your maximum talk time, as imposed by the Google Speech api. (I guess its really more of a short story).

## FAQ
- What is this? `Error: Audio data is being streamed too slow. Please stream audio data approximately at real time.`
	- I haven't found a good answer yet, but it comes from the Google Speech API. Its apparently a common error for other apps that consume it as well. Just try running your translation again.
