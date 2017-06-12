export default {
  // Set the target language:
  targetLang: 'de',

  /* 
    Language Options: 
      - English: en
      - Spanish: es
      - French: fr
      - Italian: it
      - Russian: ru
      - German: de
      - Japanese: ja
      - Chinese (simplified): zh


    Full list of language codes: https://cloud.google.com/translate/docs/languages
    NOTE: You will need to map any new language codes to additional MacOS voices.
  */

	streamPath: 'streams/voiceRecording.wav',
  sampleRate: 16000,
  voiceThreshold: .6,
  encoding: 'LINEAR16',
  inputLanguage: 'en-US',
  keyFilename: './_keyFile.json',
  macVoices: {
    en: 'Tessa',
    fr: 'Thomas',
    es: 'Juan',
    it: 'Luca',
    ru: 'Milena',
    de: 'Anna',
    ja: 'Kyoko',
    zh: 'Sin-ji',
  }
}
