import Translate from '@google-cloud/translate';
import _ENV from '../_ENV.js';

const projectID = _ENV.projectID;
const translateKey = _ENV.translateKey;


export default function translate(text, targetLanguage, sourceLanguage){
  const translateClient = Translate({
    projectId: projectID,
    key: translateKey
  });

  // return translateClient.translate(text, targetLanguage)
  return translateClient.translate(text, {
    from: sourceLanguage,
    to: targetLanguage,
  })
}
