export default {
  // Set the target language:
  targetLang: 'ja',

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
      - Hebrew: iw
      - Portuguese: pt
      - Arabic: ar
      - Swedish: sv
      - Dutch: nl


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
    en: 'Karen',
    fr: 'Thomas',
    es: 'Juan',
    it: 'Luca',
    ru: 'Yuri',
    de: 'Anna',
    ja: 'Kyoko',
    zh: 'Sin-ji',
    iw: 'Carmit',
    pt: 'Luciana',
    ar: 'Maged',
    sv: 'Alva',
    nl: 'Ellen',
  }
}
