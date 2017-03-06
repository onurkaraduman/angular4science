import {Token} from '../model/token';
import {SymbolType} from "../type/symbol-type.enum";
import {OperandOrderException} from "../exception/operand-order-exception";

/**
 * Syntax and semantic analyzer
 * <p>
 *     <b>rule1</b>
 *     Two number can not be side by side(e.g. 89 78)
 *     Exceptional case -> Only parenthesis  can be side by side (e.g. (( )
 * </p>
 * <p>
 *     <b>rule2</b>
 *     Two number can not be side by side(e.g. 89 78)
 * </p>
 * <p>
 *     <b>rule3</b>
 *     Expression can not be ended with operand (e.g. 6+3+3-)
 * </p>
 */
export class Syntaxer {

  analyze(tokens: Token[]): boolean {
    if (this.rule1(tokens) && this.rule2(tokens) && this.rule3(tokens)) {
      return true;
    }
    return false;
  }

  /**
   * Two operand can not be side by side.(e.g. +=)
   * Exceptional case -> Only parenthesis  can be side by side (e.g. (( )
   */
  rule1(tokens: Token[]): boolean {
    for (var i = 0; i < tokens.length; i++) {
      let token1 = tokens[i];
      let token2 = tokens[i + 1];
      if (token1.isSymbol() && token2.isSymbol()) {
        if (token1.symbol.name === SymbolType.PARENTHESES1
          || token2.symbol.name === SymbolType.PARENTHESES1
          || token1.symbol.name === SymbolType.PARENTHESES2
          || token2.symbol.name === SymbolType.PARENTHESES2) {
          continue;
        }
        else {
          // throw new Error("Operand error");
          throw new OperandOrderException(token1.index, token1.symbol.name.toString())
        }
      }
    }
    return true;
  }

  /**
   * Two number can not be side by side(e.g. 89 78)
   *
   */
  rule2(tokens: Token[]): boolean {
    for (var i = 0; i < tokens.length - 2; i++) {
      let token1 = tokens[i];
      let token2 = tokens[i + 1];
      let token3 = tokens[i + 2];
      if (token1.isNumeric()) {
        if (token2.isNumeric()) {
          // throw new Error("Operand error");
          throw new OperandOrderException(token1.index, token1.expression);
        }
        else if (token2.isSpace() && token3.isNumeric()) {
          // throw new Error("Operand error");
          throw new OperandOrderException(token1.index, token1.expression)
        }
        else {
          continue;
        }
      }
    }
    return true;
  }

  /**
   * Expression can not be ended with operand (e.g. 6+3+3-)
   */
  rule3(tokens: Token[]): boolean {
    let token = tokens[tokens.length - 1];
    return !token.isSymbol();
  }
}
