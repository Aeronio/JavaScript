/*Code Problem #8:

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
*/

class BinarySearchTree
{
    constructor()
    {
        // root of a binary search tree
        this.root = null;
    }

    insertData(data)
    {
        var newNode = new Node(data);
    
        if (this.root === null){
            this.root = newNode;
        }
        this.insertNode(this.root, newNode)
    }
    
    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else
        {
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right,newNode);
        }
    }

    remove(data)
{
    this.root = this.removeNode(this.root, data);
}
 
// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
    if(node === null)
        return null;
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
    else
    {
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }

        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
 
        // Deleting node with two children
        // minimum node of the right subtree
        // is stored in aux
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
 
}

}

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function countUnival(treeRoot){
    newCount = cUnival(treeRoot);
    return newCount[0];
}

function cUnival(someNode){
    let universalValue = someNode.data;

    if (someNode == null){
        return 0, true;
    }
    switch(someNode)
    {
        case(someNode.left == null && someNode.right == null):
            return 1;
        case(someNode.left == universalValue && someNode.right == null):
            return 1;
        case(someNode.left == null && someNode.right == universalValue):
            return 1;
        case(someNode.left == universalValue && someNode.right == universalValue):
            return 1;
        default:
            return 0;
    }
    return 0;
}


var node = new Book("Morgawr", "Terry Brooks");


const testExample = [1, 2, 3, 4, 5];
const testExample2 = [3, 2, 1];

let list1 = [10, 15, 3, 7];
let list2 = [20, 30, 12, 10];
let list3 = [0, 10, 2, 17, 5];
let list4 = [11, 20, -3, 10];

listOfNumbers = list4;

document.write("What if we took every integer in an array and multiplied it against everything else in the array? Wouldn't that be funny? <br>");
document.write("The results: " + altBigMultiply(testExample));