import Translate from '@google-cloud/translate';
import _ENV from './_ENV.js';

const projectID = _ENV.projectID;
const translateKey = _ENV.translateKey;

// Instantiates a client
const translateClient = Translate({
  projectId: projectID,
  key: translateKey
});

// The text to translate
const text = 'Hello, world!';
// The target language
const targetLanguage = 'ru';

// Translates some text into Russian
translateClient.translate(text, targetLanguage)
  .then((results) => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
