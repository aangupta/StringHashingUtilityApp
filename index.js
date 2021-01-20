const readLineSync = require('readline-sync');
console.log("Welcome to String Hashing Utility App\n");

const crypto = require('crypto');

function base64EncoderDecoder(){

  let selectedOption = parseInt(readLineSync.question("Option 0 to leave the String Hashing Utility Application\nOption 1 for encrypting the string using md5 algorithm.\nOption 2 for encrypting the string using sha-1 algorithm.\nOption 3 for encrypting the string using sha-256 algorithm\nOption 4 for encrypting the string using sha-512 algorithm\nPlease provide your input\n"));

  console.log(`Hi, you have selected option: ${selectedOption}\n`);

  if(selectedOption==0){
     return selectedOption;
  }

  while(selectedOption!=0){
    
    let stringToEncode = readLineSync.question("Enter the string you wish to encode\n");

    switch(selectedOption){

  case 1:
  const hashmd5 = crypto.createHash('md5').update(stringToEncode).digest('hex'); 
  console.log(`Your encoded string is : ${hashmd5}\n`);
  break;
  case 2:
  const hashsha1 = crypto.createHash('sha1').update(stringToEncode).digest('hex'); 
  console.log(`Your encoded string is : ${hashsha1}\n`);
  break;
  case 3:
  const hashsha256 = crypto.createHash('sha256').update(stringToEncode).digest('hex');
  console.log(`Your encoded string is : ${hashsha256}\n`);
  break;
  case 4:
  const hash512 = crypto.createHash('sha512').update(stringToEncode).digest('hex');
  console.log(`Your encoded string is : ${hash512}\n`);
  break;
  default:
  console.log("Invalid String");
  break;
  }
  
  selectedOption = parseInt(readLineSync.question("Please provide your input\n"));
  console.log(`Hi, you have selected option: ${selectedOption}\n`);
   

  }

}
const val = base64EncoderDecoder();
console.log("Thank you for using Stirng Hashing Utility App\n");