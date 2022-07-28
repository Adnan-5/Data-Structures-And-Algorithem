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

//   Using  Queue Class: Assigning Partners at a Square Dance
// dancer is stored in a Dancer object
function Dancer(name, gender) {
    this.name = name;
    this.gender=gender;
}

function getDancers(males, females) {
    var names = ['F Allison McMillan','M Frank Opitz','M Mason McMillan',' M Clayton Ruff',
       ' F Cheryl Ferenback',
        'M Raymond Williams',
        'F Jennifer Ingram',
        'M Bryan Frazer',
       ' M David Durr',
        'M Danny Martin',
        'F Aurora Adney']
    for (var i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; ++i) {
    var dancer = names[i].split(" ");
    var gender = dancer[0];
    var name = dancer[1];
    if (gender == "F") {
    females.enqueue(new Dancer(name, gender));
    }
    else {
    males.enqueue(new Dancer(name, gender));
    }
    }
    }

    function dance(males, females) {
        console.log("The dance partners are: \n");
        while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        // putstr("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log(" and the male dancer is: " + person.name);
        }
        console.log();
        }

        // testing

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
console.log(maleDancers.front().name + " is waiting to dance.");
}