import fs from 'fs';
import record from 'node-record-lpcm16';
import Speech from '@google-cloud/speech';
import constants from './constants';

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

export function streamToParser(){
  const speech = Speech();
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
  .on('data', (data) => console.log(data.results));
  // process.stdout.write

  record
  .start({
    sampleRateHertz: constants.sampleRate,
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

  console.log('Google is listening...')
};
