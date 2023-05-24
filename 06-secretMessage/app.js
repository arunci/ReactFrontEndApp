let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove last string of the array
secretMessage.pop();

// add to more words to the end of the array
secretMessage.push("to", "Program")


// change the word easily by right
secretMessage[secretMessage.indexOf('easily')] = "right"

// delete the first element of the arrar
secretMessage.shift()

// Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift("Programming")

// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
secretMessage.splice(secretMessage.indexOf("right"), 5, 'know')

// On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "))
