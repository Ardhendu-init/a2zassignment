function findLongestWordWithMostVowels(sentence) {
  let longestWord = "";
  let maxVowelCount = 0;

  const words = sentence.split(/\s+/);

  for (const word of words) {
    // Remove non-alphabet characters from the word
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "");

    // Calculate the number of vowels in the word
    const vowelCount = cleanedWord
      .split("")
      .filter((char) => "aeiouAEIOU".includes(char)).length;

    if (
      cleanedWord.length > longestWord.length ||
      (cleanedWord.length === longestWord.length && vowelCount > maxVowelCount)
    ) {
      longestWord = cleanedWord;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

// Example usage:
const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
// const sentence = Smart people learn from everything and everyone, average people from their      experience, stupid people already, have all the answers
//const sentence = Smart people learn from everything and everyon12e, average people from their experience, stupid people already, have all the answers
// const sentence = You luv cat
const longestWord = findLongestWordWithMostVowels(sentence);
console.log("Longest word with most vowels:", longestWord);
