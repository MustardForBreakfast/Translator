import translate from './translation';
import { streamToParser } from './voiceStream';
import constants from './constants';
import * as child from 'child_process';

streamToParser(handleParsed);

/* full list of language codes: https://cloud.google.com/translate/docs/languages 

  Currently hooked up: 
    - English: en
    - Spanish: es
    - French: fr
    - Italian: it
    - Russian: ru
    - German: de
    - Japanese: ja
    - Chinese (simplified): zh
*/

function handleParsed(parsedText, targetLang = 'en'){
  translate(parsedText, targetLang)
  .then((results) => {
    const translation = results[0];
    console.log('translation: ', translation);

    const speak = child.exec(`sh ./speakText.sh ${getVoice(targetLang)} "${translation}"`)
    .on('close', ()=>{
      console.log('i have spoken.')
    })

    speak.stderr.on('data', function(data){
        console.log('error: ', data);
    });
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });  
}

function getVoice(langCode){
  return constants.macVoices[langCode];
}
