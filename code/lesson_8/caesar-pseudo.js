// inputSentence = "hi the class is done and I am done";
// encryptedMessage = "";
// alphabet = "abcdefghijklmnopqrstuvwxyz" . . .
// for (i=0; i<=inputSentence.length; i++){
//     currentLetter = inputSentence[i];
//     if(!alphabet.includes(currentLetter))     // if the current letter is not in the alphabet
//              encryptedMessage += currentLetter;            
//     currentLetterPosition = alphabet.indexOf(currentLetter);   // 8
//     newLetterPosition = currentLetterPosition + 3;
//     // TODO: handle the edgecase that the letter is outside the alphabet
//          if (newLetterPosition > alphabet.length){
//             newLetterPosition -= alphabet.length    
//          }
//     newLetter = alphabet[newLetterPosition];
//     encryptedMessage += newLetter;
// }