// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 

// P array of words
// R one string without spaces
// E hello there -> hellothere
// P join the string on spaces

function smash (words) {
    return words.join(" ")
 };

 // what if you want all words lower case