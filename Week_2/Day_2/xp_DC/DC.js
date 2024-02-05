/*ex_DC Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
For example, “The movie is not that bad, I like it”.

Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
For example, the result here should be : “The movie is good, I like it”
If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.*/

/*
//let sentence = "The Kiryat Moriah food was not that bad."//here are a few sample sentences including some that would be problematic for certain codes
//let sentence="No, the green flavor is bad, not good!"
//let sentence="Not bad for a rookie."
//let sentence= "I feel really bad for him"
//let sentence ="Every knot I tie is bad."
//let sentence = "I never noticed how bad it was."
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf('bad');

if (wordNot < wordBad && wordNot>=0 && sentence.charAt(wordNot-1)==" " && sentence.charAt(wordNot+3)==" "){
    let notBad = sentence.substring(wordNot, (wordBad + 3));
    if (wordNot == 0) {
        let goodSentence = sentence.replace(notBad, 'Good');
        console.log(goodSentence)
    }
    else {
        let goodSentence = sentence.replace(notBad, 'good');
        console.log(goodSentence)
    }
}
else {
    console.log(sentence)
}
*/