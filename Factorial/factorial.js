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
// for removing
function pop(){
    return this.dataStore[--this.top];
}
function clear() {
    this.top= 0;
}

// factorial fnction goes here
function factorial(n){

}