//test 9
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