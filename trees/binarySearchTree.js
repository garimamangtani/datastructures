class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(root, val) {
        if (root === null) {
            return new Node(val);
        }
        if (root.val > val) {
            root.left = this.insert(root.left, val);
        } else {
            root.right = this.insert(root.right,val);
        }
        return root;
    }

    traverse(root) {
        if (root === null) {
            return;
        }
        console.log(root.val);
        this.traverse(root.left);
        this.traverse(root.right);
    }

}

bst = new BinarySearchTree();
bst.root = bst.insert(bst.root, 10);
bst.root = bst.insert(bst.root, 5);
bst.root = bst.insert(bst.root, 13);
bst.root = bst.insert(bst.root, 11);
bst.root = bst.insert(bst.root, 2);
bst.root = bst.insert(bst.root, 16);
bst.root = bst.insert(bst.root, 7);

bst.traverse(bst.root);

