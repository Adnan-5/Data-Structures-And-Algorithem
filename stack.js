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

let stack = new Stack();
stack.push("ali");
stack.push("jibran");
stack.push("ahmed");
stack.push("Ahm")
console.log("length" + stack.length); // output 1
console.log(stack.peek());  // output 2
let pooped = stack.pop();
console.log('The poped element is '+ pooped);  // output 3
console.log(stack.peek()); //  // output 4
stack.push("adnan")