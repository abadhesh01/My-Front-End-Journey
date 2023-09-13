
/*
  Author: Abadhesh Mishra
  Email: abadheshmishra01@gmail.com
  GitHub: https://github.com/abadhesh01
  GitLab: https://gitlab.com/abadhesh01
*/

/* This function generates dummy words of specified length. */
function generateDummyWord(length, firstCharacterIsUpperCase) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'; 
    let word = "";  
    for(let wordCount = 0; wordCount < length; wordCount ++) {
      const randomNumber = Math.floor(Math.random() * alphabets.length);   
      word += alphabets[randomNumber];
    }

    if(firstCharacterIsUpperCase) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return word;
}

/* This function generates dummy text of specified length. */
function generateDummyText(numberOfWords) {
      if(numberOfWords < 10) {
          numberOfWords = 9;
      } else {
          numberOfWords --;
      }

      let text = generateDummyWord(Math.random() * 10, true);

      for(let wordCount = 0; wordCount < numberOfWords; wordCount ++) {
          text += " " + generateDummyWord(Math.random() * 10, false); 
      }   

      return text + ".";
}