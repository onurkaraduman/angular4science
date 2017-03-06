import {Lexer} from './analyzer/lexer';
import {Syntaxer} from './analyzer/syntaxer';
import {ExpressionTree} from "./model/expression-tree";

/**
 * Calculator engine class
 */
export class Engine {

  /**
   * Steps:
   * <p>1. Lexer analyze</p>
   * <p>2. Syntax and semantic analyze</p>
   * <p>3. Creating expression tree</p>
   * <p>4. Traversal expression tree</p>
   * @param expression
   * @returns {any}
   */
  calculate(expression: string): number {
    var lexer = new Lexer();
    try {
      var tokens = lexer.analyse(expression);
    } catch (exception) {
      alert(exception.message);
      return null;
    }

    var syntaxer = new Syntaxer();
    try {
      if (!syntaxer.analyze(tokens)) {
        alert("Syntax error");
        return null;
      }
    } catch (exception) {
      alert(exception.message);
      return null;
    }

    var expressionTree = new ExpressionTree();
    var token = expressionTree.contructTree(tokens);
    return parseInt(expressionTree.traverse(token));
  }
}
