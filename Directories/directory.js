// defining the Directory class here
function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    }
    function add(key, value) {
    this.datastore[key] = value;
    }
    function find(key) {
    return this.datastore[key];
  }
    function remove(key) {
    delete this.datastore[key];
    }
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