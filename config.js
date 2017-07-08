//INSTRUCTIONS: configure the basic settings below, then run `npm start` and wait for "Translator is Listening...".

export default {

  // Do you plan to speak for a while (set to true), or should translator listen for just one phrase (set to false)?
  expectANovel: false,
  // NOTE: If true, use headphones. With speakers, translator might translate its own voice.

  targetLanguage: 'en',
  sourceLanguage: 'iw',
    /* 
      Language Code Options: 
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
      NOTE: If you add a ew language code above, you will need to add both a corresponding
      region code and MacOS voice in `constants.js`.
    */
}