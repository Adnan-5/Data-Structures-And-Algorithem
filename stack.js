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
    
}