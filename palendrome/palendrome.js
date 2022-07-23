
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

// adding the element   in Stack
function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top - 1];
}
// removing the element
function pop() {
  return this.dataStore[--this.top];
}
function clear() {
  this.top = 0;
}

// Returning the length of the Stack
function length() {
  return this.top;
}

// main logic goes here
function isPalindrome(word) {
  var stack = new Stack();
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  var rword = "";
  while (stack.length() > 0) {
    rword += stack.pop();
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}
// checking for the words wheather its palindrome or not
var word = "Data";
if (isPalindrome(word)) {
  console.log(word + "is palindrame!");
} else {
  console.log(word + "Is not palindrame");
}
var word1 = "racecar";
if (isPalindrome(word)) {
  console.log(word1 + "is palindrame");
} else {
  console.log(word1 + "is not palindrame");
}
