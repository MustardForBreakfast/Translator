import record from 'node-record-lpcm16';
import fs from 'fs';

export function streamToFile(filepath){
  return new Promise((resolve, reject)=>{
    console.log('starting stream...')
    let file = fs.createWriteStream(filepath, { encoding: 'binary' })
    .on('finish', ()=>{
      resolve();
    })
     
    record.start({
      sampleRate : 16000,
      verbose : true,
      silence: '3.0',
      threshold: .3,
    })
    .pipe(file)

    // Set a max recording time - limit size.
    setTimeout(function () {
      record.stop()
    }, 15000)
  })
};
