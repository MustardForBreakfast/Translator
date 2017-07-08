//INSTRUCTIONS: configure the basic settings below, then run `npm start` and wait for "Translator is Listening...".

export default {
  inputLanguage: 'iw',
  outputLanguage: 'en',
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
      NOTE: If you add a new language code above, you will need to add a corresponding
      region code and a new MacOS voice in `constants.js`.
    */

  // Do you plan to speak for a while (true), or are you translating just one quick phrase (false)?
  expectANovel: false,
}