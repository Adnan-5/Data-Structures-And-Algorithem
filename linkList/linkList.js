// Here is the definition for the constructor fun 
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    }

    //inserting new node 
    // the linked list looking for the specified data
    function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
        currNode = currNode.next;
        }
        return currNode;
        }