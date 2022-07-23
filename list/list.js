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

// finding the element 

function find(element) {
    for (let i = 0; i < this.dataStore; i++) {
        if(this.dataStore[i]==element){
            return i;
        }
        
    }
    return -1;
}

// Removing an element

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt>-1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

function toString() {
    return this.dataStore;
}

// clearing  the list 
function clear() {
    dataStore= []
}
let names = new List();
names.append("alex");
names.append("Rehan");
names.append("ahmed");
names.append("jhsud");
console.log(names);
console.log(names.toString());