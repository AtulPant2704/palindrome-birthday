function reverseStr(str){
  var listOfChars = str.split('');
  var reverselistOfChars = listOfChars.reverse();
  var reversedStr = reverselistOfChars.join('');
  return reversedStr;
  // return str.split('').reverse().join('');
}

function isPalindrome(str){
  var reverse = reverseStr(str);
  if(reverse === str){
    console.log("true");
  }else{
    console.log("false");
  }
}