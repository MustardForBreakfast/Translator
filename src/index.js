import translate from './translation';
/* full list of language codes: https://cloud.google.com/translate/docs/languages 

 * English: en
 * Spanish: es
 * French: fr
 * Italian: it
 * Russian: ru
 * German: ge
 * Japanese: ja
 * Chinese (simplified): zh

*/

const text = 'Hi, my name is Justin.';
const targetLang = 'es';

translate(text, targetLang)
.then((results) => {
  const translation = results[0];

  console.log('original: ', text);
  console.log('translation: ', translation); 
})
.catch((err) => {
  console.error('ERROR:', err);
});