// defining the Directory class here
function Directory() {
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