import {Token} from "./token";
import {Tree} from "@angular/router/src/utils/tree";
import {isSymbol} from "util";
import {isNumeric} from "rxjs/util/isNumeric";
export class ExpressionTree {

  root: TreeNode;
  elements: number;
  LEFT_DIRECTION: number = 1;
  RIGHT_DIRECTION: number = 2;
  expressionStack: Token[];

  contructTree(tokens: Token[]): TreeNode {
    var parentNode = this.root;
    for (let token of tokens) {
      let threeNodeSym = this.createNode(token);
      parentNode = this.addNode(threeNodeSym, parentNode);
    }
    return this.root;
  }


  traverse(node: TreeNode): string {
    if (node.rightNode) {
      var right = this.traverse(node.rightNode);
    }
    if (node.leftNode) {
      var left = this.traverse(node.leftNode);
    }
    if (left && right && node.token) {
      return eval(left + node.token.expression + right).toString();
    }
    console.log(node.token.expression);
    return node.token.expression;
  }

  /**
   * add element to expression tree
   * @param node
   * @param parentNode
   * @returns {boolean}
   */
  addNode(node: TreeNode, parentNode: TreeNode): TreeNode {
    this.elements++;

    if (!this.root) {
      this.root = node;
      return this.root;
    }

    if (!this.isSymbol(this.root) && this.isSymbol(node)) {
      this.root.parentNode = node;
      node.leftNode = this.root;
      this.root = node;
      return node;
    }

    if (this.isSymbol(parentNode) && this.isNumeric(node)) {
      if (!parentNode.leftNode) {
        this.addLeftChild(node, parentNode);
        return parentNode;
      }
      else {
        this.addRightChild(node, parentNode);
        return node;
      }
    }

    if (this.isNumeric(parentNode) && this.isSymbol(node)) {
      return this.shift(node, parentNode);
    }
  }

  /**
   * Swap parent with child
   * @param child
   * @param parent
   */
  swapParentAndChild(child: TreeNode, parent: TreeNode) {
    child.parentNode = parent.parentNode;
    parent.parentNode = child;
    child.leftNode = parent;
    child.rightNode = parent.rightNode;
    parent.leftNode = child.leftNode;
  }

  addLeftChild(child: TreeNode, parent: TreeNode) {
    this.addChildAndApply(child, parent, this.LEFT_DIRECTION);
  }

  addRightChild(child: TreeNode, parent: TreeNode) {
    this.addChildAndApply(child, parent, this.RIGHT_DIRECTION);
  }

  addChildAndApply(child: TreeNode, parent: TreeNode, direction: number) {
    child.parentNode = parent;
    if (direction === this.LEFT_DIRECTION) {
      parent.leftNode = child;
    }
    else if (direction === this.RIGHT_DIRECTION) {
      parent.rightNode = child;
    }
  }

  /**
   * Check the node if it is symbol
   * @param node
   * @returns {boolean}
   */
  isSymbol(node: TreeNode) {
    return node.token.isSymbol();
  }

  /**
   * Check the node if it is numeric
   * @param node
   * @returns {boolean}
   */
  isNumeric(node: TreeNode) {
    return node.token.isNumeric();
  }

  /**
   *
   * @param node1
   * @param node2
   */
  shift(node: TreeNode, parentNode: TreeNode) {
    let parentTmp = parentNode;
    while (parentTmp.parentNode) {
      if (this.priorThan(node, parentTmp.parentNode)) {
        parentTmp.parentNode.rightNode = node;
        node.parentNode = parentTmp.parentNode;
        this.addLeftChild(parentTmp, node);
        return node;
      }
      parentTmp = parentTmp.parentNode;
    }
    this.addLeftChild(parentTmp, node);
    this.root = node;
    return node;
  }

  createNode(token: Token) {
    return new TreeNode(token);
  }

  priorThan(node1: TreeNode, node2: TreeNode): boolean {
    return node1.token.priorThan(node2.token);
  }


}

/**
 * Tree node
 */
class TreeNode {
  leftNode: TreeNode;
  rightNode: TreeNode;
  parentNode: TreeNode;
  token: Token;

  constructor(token: Token) {
    this.token = token;
  }
}
