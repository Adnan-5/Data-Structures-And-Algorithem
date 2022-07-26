// Queue class by defining the constructor
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
  }
  // adding an element
  function enqueue(element) {
    this.dataStore.push(element);
  }
  // removes an element
  function dequeue() {
    return this.dataStore.shift();
  }
  
  // getting front and back elements of a queue using these functions
  
  function front() {
    return this.dataStore[0];
  }
  function back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  // all the elements in a queue
  function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }
  //if a queue is empty
  function empty() {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }