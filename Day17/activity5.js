// //test 9
// //Write a recursive function that prints the nodes of a binary tree in inorder. Log the results in the console for different test cases.
// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function inOrderTraversal(node) {
//     if (node === null) {
//       return;
//     }
  
//     inOrderTraversal(node.left);
//     console.log(node.value);
  

//     inOrderTraversal(node.right);
//   }
//   const root = new Node(1);
//   root.left = new Node(2);
//   root.right = new Node(3);
//   root.left.left = new Node(4);
//   root.left.right = new Node(5);
  
  
//   console.log("In-Order Traversal Output:");
//   inOrderTraversal(root);
  //Test 10;
//Write a recursive function that prints the nodes of a binary tree in preorder. Log the results in the console for different test cases.
  
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  function findDepth(root) {
    if (root === null) {
      return 0;
    }
    let leftDepth = findDepth(root.left);
    let rightDepth = findDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.right = new Node(6);
  
  console.log("Depth of the tree:", 
    findDepth(root)); 
  
  let root2 = new Node(10);
  root2.left = new Node(20);
  root2.right = new Node(30);
  
  console.log("Depth of the second tree:", findDepth(root2)); 
  