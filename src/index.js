import translate from './translation';
import { streamToParser } from './voiceStream';
import constants from './constants';
import * as child from 'child_process';

const targetLang = constants.targetLang;

let stuffToSay = [];
let isSpeaking = false;

streamToParser(handleParsed);


function handleParsed(parsedText){
  translate(parsedText, targetLang)
  .then((results) => {
    const translation = results[0];
    console.log('translation: ', translation);

    stuffToSay.push(translation);

    if(!isSpeaking){
      sayStuff(0);
    }

  })
  .catch((err) => {
    console.error('ERROR:', err);
  });  
}

function getVoice(langCode){
  return constants.macVoices[langCode];
}

function sayStuff(index){
  isSpeaking = true;
  const phrase = stuffToSay[index];
  const speak = child.exec(`sh ./speakText.sh ${getVoice(targetLang)} "${phrase}"`)
  .on('close', ()=>{

    if(stuffToSay[index+1]){
      sayStuff(index+1)
    } else {
      isSpeaking = false;
      stuffToSay = [];
      console.log('i have spoken.')
    }
  })

  speak.stderr.on('data', function(data){
    console.log('error: ', data);
  });
}
