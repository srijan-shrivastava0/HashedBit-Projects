// Q1) Create an array of states in India and remove names starting with vowels using array.filter
let states = ["Uttar Pradesh", "Andhra Pradesh", "Maharashtra", "Odisha", "Kerala", "Tamil Nadu"];
let filteredStates = states.filter(state => !"AEIOUaeiou".includes(state[0]));
console.log("Q1:", filteredStates);  // Output: [ 'Maharashtra', 'Tamil Nadu' ]

// Q2) let str = 'I love my India' => output expected = 'India my love I'
let str = 'I love my India';
let reversed = str.split(' ').reverse().join(' ');
console.log("Q2:", reversed);  // Output: India my love I

// Q3) let string = 'INDIA' => output = 'INDONESIA' using array.splice
let arr = ['I', 'N', 'D', 'I', 'A'];
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
console.log("Q3:", arr.join(''));  // Output: INDONESIA

// Q4) Count vowels and consonants in a string
let str4 = "Javascript is the heart of frontend!";
let vowels = 'aeiouAEIOU';
let vowelCount = 0;
let consonantCount = 0;
for (let ch of str4) {
    if (/[a-zA-Z]/.test(ch)) {
        if (vowels.includes(ch)) vowelCount++;
        else consonantCount++;
    }
}
console.log("Q4: Vowels:", vowelCount, "Consonants:", consonantCount);

// Q5) Replace wrong word with correct word using string.replace
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
console.log("Q5:", correctfn("He is wrng guy", "wrng", "right"));  // Output: He is right guy

// Q6) Filter numbers greater than 5 using array.filter
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = inputArr.filter(num => num > 5);
console.log("Q6:", answer);  // Output: [9, 10, 7]

// Q7) Calculate average score of each student using map and reduce
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
let result = students.map(student => {
  let avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  return { name: student.name, average: avg };
});
console.log("Q7:", result);

// Q8) Find repeated sum of digits until single digit remains
function repeatedDigitSum(n) {
  while (n >= 10) {
    n = n.toString().split('').reduce((a, b) => a + Number(b), 0);
  }
  return n;
}
console.log("Q8:", repeatedDigitSum(456));  // Output: 6

// Q9) Count number of words in a paragraph
function countWords(para) {
  return para.trim().split(/\s+/).length;
}
console.log("Q9:", countWords("This is a test paragraph with seven words."));  // Output: 8

// Q10) Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("Q10:", reverseString("Hello"));  // Output: olleH

// Q11) Calculate average marks for each student from object of objects
const input = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};
let output = {};
for (let student in input) {
  let scores = Object.values(input[student]);
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  output[student] = { average: avg };
}
console.log("Q11:", output);
