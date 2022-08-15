/**
 * @Author: Samraj Soundarajan
 */

/**
 * Question:
 * Given an array of words and an array of sentences, determine which words are anagrams of each other. Calculate how many sentences can be created by replacing any word with one of its anagrams, Example wordSet = ['listen' 'silent, 'it', 'is'] sentence = "listen it is silent Determine that listen is an anagram of silent. Those two words can be replaced with their anagrams. The four sentences that can be created are: • listen it is silent • listen it is listen • silent it is silent • silent it is listen​
 *
 */

/** 
 * Finding How Many Sentences can be created is basically multiplication of How Many Anagrams Present in the Sentence to the Word Set Given
 */

// Given

let wordSet = ["listen", "silent", "it", "is", "acts", "cats"];
let sentence = ["listen it is silent", "cats acts bats listen"];

// Expected From the Question

// listen it is silent
// silent it is silent
// listen it is listen
// silent it is listen

// Find Count of Anagrams Of Each Word Set Present

let wordMap = {};
wordSet.forEach((word) => {
  let checkWord = word.split("");
  if (wordMap[checkWord.sort()]) {
    wordMap[checkWord]++;
  } else {
    wordMap[checkWord] = 1;
  }
});

// Just Creating a Return Array to the Sentence Length filling with 1 Considering Sentence Count is 1

let resultedSentenceLengthArray = new Array(sentence.length).fill(1);

// Check Each Sentence How Many Times Anagram Present in the Sentence and Multiple with the Word Set Equals

sentence.forEach((ele, index) => {
  let sentenceSplit = ele.split(" ");
  sentenceSplit.forEach((word) => {
    let key = word.split("").sort();
    if (wordMap[key]) {
      resultedSentenceLengthArray[index] *= wordMap[key];
    }
  });
});

// Resulted Array for Each Sentence with its Number of Sentence can be Created with Anagrams Present in Word Set
console.log(resultedSentenceLengthArray);
