let reg = /Letter/i; // case sensitive put i;

let sentence = "I have one letter";

// finding start index of regular expression string in sentence
let exec = reg.exec(sentence); // starting index of string 
let test = reg.test(sentence); // bool result
let match = sentence.match(reg);
let search = sentence.search(reg);

console.log(exec);
console.log(test);
console.log(match);
console.log(search)
console.log(reg.source)

/* 
   ^ start with
   $ end with
   ^..$ only  (exactly same)
   ^h.llo$ any character
   h*llo zero or more character 
   h?e?ollo e or o optional
   h?e?llo\? check question mark
   h[es]llo e or s only 
   [A-Z]ello any upper case letter
   [a-z]ello any lower case letter
   [A-Za-z0-9]ello start with any upper or lower or number case letter
   [h]e[l]{2}o check double word with curley bracket
   ([hb]e){3}llo parentheses grouping 
   /e/ hello include character in hello
   /\s/ check space bar between character
   /x(?=y)/ match x if only it is follow by y
   /x(!?y)/ match x if only it is not follow by y 
*/


function check_words(reg, str){
   if(reg.test(str)){
      console.log(`${reg.source} words match in the "${str}"`);
   }
   else{
      console.warn(`${reg.source} not match words in ${str}`)
   }
}
check_words(/i/, "hello")

