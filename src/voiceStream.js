import fs from 'fs';
import record from 'node-record-lpcm16';
import Speech from '@google-cloud/speech';
import constants from './constants';
import _ENV from '../_ENV';

const projectID = _ENV.projectID;

// not using this just now.
export function streamToFile(){
  return new Promise((resolve, reject)=>{
    console.log('Starting stream...')
    let file = fs.createWriteStream(constants.streamPath, { encoding: 'binary' })
    .on('finish', ()=>{
      console.log('Stream over.')
      resolve();
    })
     
    record.start({
      sampleRate : constants.sampleRate,
      verbose : true,
      silence: '3.0',
      threshold: constants.voiceThreshold,
    })
    .pipe(file)

    // Set a max recording time to limit file size.
    setTimeout(function () {
      record.stop()
    }, 15000)
  })
};

export function streamToParser(translateCallback){
  const speech = Speech({
    projectId: projectID,
    keyFilename: constants.keyFilename,
  });
  const request = {
    config: {
      encoding: constants.encoding,
      sampleRateHertz: constants.sampleRate,
      languageCode: constants.inputLanguage,
    },
    interimResults: false,
  };

  const recognizeStream = speech.createRecognizeStream(request)
  .on('error', console.error)
  .on('data', (data) => {
    console.log('in english:', data.results)
    translateCallback(data.results)
  });

  record
  .start({
    sampleRate: constants.sampleRate,
    threshold: constants.voiceThreshold,
    verbose: true,
    silence: '5.0'
  })
  .on('error', console.error)
  .pipe(recognizeStream)

  // Set a max recording time to limit file size.
  // setTimeout(function () {
  //   record.stop()
  // }, 15000)

  console.log('Translator is listening...')
};
