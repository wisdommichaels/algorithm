function analyzeSentence(sentence) {
    // Step 1: Initialize Counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    
    // Step 2: Set of Vowels
    const vowels = "aeiouAEIOU";
    
    // Step 3: Initialize Word Tracking
    let inWord = false;

    // Step 4: Iterate Through Each Character
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        length++;

        if (vowels.includes(char)) {
            vowelCount++;
        }

        if (char === ' ') {
            if (inWord) {
                wordCount++;
                inWord = false;
            }
        } else {
            inWord = true;
        }
    }

    // Step 5: Adjust for Final Word
    if (inWord) {
        wordCount++;
    }

    // Step 6: Adjust Length for Final Period
    length--;

    // Step 7: Output the Results
    console.log("Length of the sentence:", length);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

// Example usage:
let sentence = "My name is Wisdom, i am a GoMyCoder.";
analyzeSentence(sentence);
