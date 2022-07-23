function List() {
    this.listSize=0;
    this.pos=0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.append = append;
     this.toString = toString;
     this.remove = remove;
     this.length = length;
}

// length of the list
function length() {
    return this.listSize;
}

// appending the list 
function append(element) {
    this.dataStore[this.listSize++]= element;
}