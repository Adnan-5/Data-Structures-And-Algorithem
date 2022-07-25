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
//Accession the  top most element in stack
function peek() {
    return this.dataStore[this.top-1];
}
// removing the element 
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0; // Assigning the top most value as 0;
}

// Returning the length of the Stack
function length(){
   return this.top;
}



// Converting the numbers base 2 and base 8
function mulBase(num, base) {
    var s = new Stack();
    do {
    s.push(num % base);
    num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
    converted += s.pop();
    }
    return converted;
    }
    var num = 32;
    var base = 2;
