
const data = [
  {
    "problem": "ABChecker",
    "statement": "Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and r eturn the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. \"lane borrowed\" would result in true because there is exactly three characters between a and b). Otherwise return the string false.",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/ABChecker.js"
  },
  {
    "problem": "AdditivePersistence",
    "statement": "Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/AdditivePersistence.js"
  },
  {
    "problem": "AlphabetSoup",
    "statement": "Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/AlphabetSoup.js"
  },
  {
    "problem": "ArithGeo",
    "statement": "Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string \"Arithmetic\" if the sequence follows an arithmetic pattern or return \"Geometric\" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/ArithGeo.js"
  },
  {
    "problem": "ArrayAdditionI",
    "statement": "Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/ArrayAdditionI.js"
  },
  {
    "problem": "CheckNums",
    "statement": "Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/CheckNums.js"
  },
  {
    "problem": "CountingMinutesI",
    "statement": "Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/CountingMinutesI.js"
  },
  {
    "problem": "DashInsert",
    "statement": "Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/DashInsert.js"
  },
  {
    "problem": "DivisionStringified",
    "statement": "Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output \"1\"). For example: if num1 is 123456789 and num2 is 10000 the output should be \"12,345\". ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/DivisionStringified.js"
  },
  {
    "problem": "ExOh",
    "statement": "Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is \"xooxxxxooxo\" then the output should return false because there are 6 x's and 5 o's. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/ExOh.js"
  },
  {
    "problem": "ExpressionMatcher",
    "statement": "ExpressionMatcher is take the str parameter being passed and return \"Expression Matched\" or \"Expression Not Matched\" @param {string} str @param {array} openExpArr <optional> default value ['[', '{', '('] @param {array} closeExpArr <optional> default value [')', '}', ']'] @returns ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/ExpressionMatcher.js"
  },
  {
    "problem": "Factorial",
    "statement": "Using the JavaScript language, have the function Factorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/Factorial.js"
  },
  {
    "problem": "FindNextLargest",
    "statement": "isArraySorted",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/FindNextLargest.js"
  },
  {
    "problem": "KaprekarsConstant",
    "statement": "KaprekarsConstant ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/KaprekarsConstant.js"
  },
  {
    "problem": "LetterCapitalize",
    "statement": "Using the JavaScript language, have the function LetterCapitalize(str) t ake the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. const LetterCapitalize = (str) => { var words = str.split(\" \"); for (var i = 0; i < words.length; i++) { words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1); } return words.join(\" \"); } const LetterCapitalize_Regex = (str) =>{ /* \\b defines word boundry ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/LetterCapitalize.js"
  },
  {
    "problem": "LetterCountI",
    "statement": "Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: \"Today, is the greatest day ever!\" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return <b>-1</b>. Words will be separated by spaces.",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/LetterCountI.js"
  },
  {
    "problem": "Longest_Word",
    "statement": "return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/Longest_Word.js"
  },
  {
    "problem": "MeanMode",
    "statement": "Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/MeanMode.js"
  },
  {
    "problem": "NumberSearch",
    "statement": "Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is \"88Hello 3World!\" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So \"55Hello\" and \"5Hello 5\" should return two different answers. Each string will contain at least one letter or symbol. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/NumberSearch.js"
  },
  {
    "problem": "Palindrome",
    "statement": "Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: \"racecar\" is also \"racecar\" backwards. Punctuation and numbers will not be part of the string. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/Palindrome.js"
  },
  {
    "problem": "PowersofTwo",
    "statement": "Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/PowersofTwo.js"
  },
  {
    "problem": "Reverse_String",
    "statement": "Using the JavaScript language, have the function Reverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is \"Hello World and Coders\" then your program should return the string sredoC dna dlroW olleH. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/Reverse_String.js"
  },
  {
    "problem": "SecondGreatLow",
    "statement": "Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/SecondGreatLow.js"
  },
  {
    "problem": "SimpleAdding",
    "statement": "Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/SimpleAdding.js"
  },
  {
    "problem": "SwapCase",
    "statement": "Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is \"Hello World\" the output should be hELLO wORLD. Let numbers and symbols stay the way they are",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/SwapCase.js"
  },
  {
    "problem": "ThirdGreatest",
    "statement": "Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is [\"hello\", \"world\", \"before\", \"all\"] your output should be world because \"before\" is 6 letters long, and \"hello\" and \"world\" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was [\"hello\", \"world\", \"after\", \"all\"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/ThirdGreatest.js"
  },
  {
    "problem": "TimeConvert",
    "statement": "Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/TimeConvert.js"
  },
  {
    "problem": "VowelCount",
    "statement": "Vowel Count Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. \"All cows eat grass\" would return 5). Do not count y as a vowel for this challenge. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/VowelCount.js"
  },
  {
    "problem": "WordCount",
    "statement": "Word Count Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. \"Never eat shredded wheat\" would return 4). Words will be separated by singlespaces. ",
    "url": "https://github.com/pankajladhar/JS_Exercise/blob/master/WordCount.js"
  }
]
module.exports =  data

