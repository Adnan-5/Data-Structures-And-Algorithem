// defining the Directory class here
function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    }
    // The key is the index for the value element.
    function add(key, value) {
    this.datastore[key] = value;
    }
    // returns the value associated with it
    function find(key) {
    return this.datastore[key];
  }
  // deletes both the key and the associated value
    function remove(key) {
    delete this.datastore[key];
    }
    // The keys() function, when called with an object, returns all the keys stored in that
// object.
    function showAll() {
    for  (var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
    }
    }

      // code testing goes here

      var pbook = new Dictionary();
pbook.add("Asad","111");
pbook.add("Addi", "123");
pbook.add("Kashif", "124");
pbook.add("asad", "101");
pbook.showAll();
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");