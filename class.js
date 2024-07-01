// function analyzeSentence(sentence) {
//     let vowelCount = 0
//     let wordCount = 0
//     let sentenceLength = 0
//     let i = 0

//     while (sentence[i] != ".") {

//         if (sentence[i] == " ") {
//             wordCount++
//         }

//     //     if (sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "i" || sentence[i] == "o" || sentence[i] == "u") {
//     //     vowelCount++
//     // }
//         switch (sentence[i]) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//             case "A":
//             case "E":
//             case "I":
//             case "O":
//             case "U":
//                 vowelCount++
//                 break;
//             default:
//                 break;
//         }
//         i++
//     }
//     sentenceLength= i+1
//     wordCount++


//     console.log(`There are ${wordCount} words in the sentence`)
//     console.log(`There are ${vowelCount} vowels in the sentence`)
//     console.log(`There are ${sentenceLength} characters in the sentence`)

//     return true;
// }

// console.log(analyzeSentence("I really love food."));


// function sentenceCounter(sentence) {
//     let wordCount = 0
//     let vowelCount = 0
//     let sentenceLength = 0
//     let i = 0 

//     while (sentence[i] != ".") {

//         if (sentence[i] == " ") {
//             wordCount++
            
//         }
        
//         switch (sentence[i]) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//             case "A":
//             case "E":
//             case "I":
//             case "O":
//             case "U":
//             vowelCount++
//                 break;
        
//             default:
//                 break;
//         }
//         i++
//     }
//     sentenceLength= i+1
//     wordCount++

//     console.log(`There are ${wordCount} words in the sentence`)
//     console.log(`There are ${vowelCount} vowels in the sentence`)
//     console.log(`There are ${sentenceLength} characters in the sentence`)
    
//     return true;
// }


function sentenceCounter(sentence){
 let wordCount = 0
 let sentenceLength = 0
 let vowelCount = 0 
 let i = 0

 while (sentence[i] != ".") {
    if (sentence [i] == " ") {
        wordCount++
    }
    switch (sentence[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            vowelCount++
            
            break;
    
        default:
            break;
    }
    i++
   
 }
 sentenceLength=i+1
 wordCount++

 console.log(`there are ${wordCount} words in the sentence`);
 console.log(`there are ${vowelCount} vowels in the sentence`);
 console.log(`there are ${sentenceLength} character in the sentence`);

 return true
}

console.log(sentenceCounter("Today is monday and i realy want to cook a very deliciouse meal."))