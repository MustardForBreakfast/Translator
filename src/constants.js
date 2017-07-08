import config from '../config';

const langCodesWithRegions = {
  en: 'en-US',
  es: 'es-MX',
  fr: 'fr-FR',
  it: 'it-IT',
  ru: 'ru-RU',
  de: 'de-DE',
  ja: 'ja-JP',
  zh: 'zh-HK',
  iw: 'he-IL',
  pt: 'pt-BR',
  ar: 'ar-SA',
  sv: 'sv-SE',
  nl: 'nl-BE',
}

export default {
  targetLang: config.outputLanguage,
  sourceLang: config.inputLanguage,
	streamPath: 'streams/voiceRecording.wav',
  sampleRate: 16000,
  voiceThreshold: .5,
  silenceBeforeCutoff: config.expectANovel ? '5.0' : '2.0',
  encoding: 'LINEAR16',
  expectANovel: config.expectANovel,
  inputLanguage: langCodesWithRegions[config.inputLanguage],
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
