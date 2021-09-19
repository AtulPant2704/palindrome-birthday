function reverseStr(str){
  var listOfChars = str.split('');
  var reverselistOfChars = listOfChars.reverse();
  var reversedStr = reverselistOfChars.join('');
  return reversedStr;
  // return str.split('').reverse().join('');
}

console.log(reverseStr("hello"));