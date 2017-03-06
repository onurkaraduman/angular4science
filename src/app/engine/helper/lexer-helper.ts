import {SymbolList} from '../data/symbol-list';
import {Symbol} from '../model/symbol';

/**
 * Lexer helper class
 */
export class LexerHelper {

  /**
   * Check if given expression is number
   * @param expression
   * @returns {boolean}
   */
  static isNumeric(expression): boolean {
    return !isNaN(parseFloat(expression)) && isFinite(expression);
  }

  /**
   * Check if given expression is operand
   * @param expression
   * @returns {boolean}
   */
  static isSymbol(expression): boolean {
    let symbols = SymbolList;
    let symbol = symbols.filter(symbol => symbol.sign === expression)[0];
    return symbol !== null && symbol !== undefined ? true : false;
  }

  /**
   * Check if given expression is Space
   * @param expression
   * @returns {boolean}
   */
  static isSpace(expression): boolean {
    return expression === " " ? true : false;
  }

  /**
   * Find the symbol with given expression
   * @param expression
   * @returns {undefined|Symbol}
   */
  static findSymbol(expression): Symbol {
    return SymbolList.find(symbol => symbol.sign === expression);
  }

}
