function Stack() {
    this.dataStore = []
    this.top = 0;
    this.push= push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
   this.length = length;
}

// adding the element   in Stack
function push(element) {
    this.dataStore[this.top++]= element;
}

function peek() {
    return this.dataStore[this.top-1];
}
// removing the element 
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}

// Returning the length of the Stack
function length(){
   return this.top;
}

// main logic goes here 
function isPalindrome(word){
   var stack = new Stack();
   stack.push
   
}