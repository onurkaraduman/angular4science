import {TokenType} from "../type/token-type.enum";
import {Symbol} from "../model/symbol";
import {SymbolList} from "../data/symbol-list";
/**
 * Token model
 * Token is created as result of lexical analysis
 */
export class Token {
  tokenType: TokenType;
  index: number;
  expression: string;
  symbol: Symbol;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  isSymbol(): boolean {
    return this.tokenType === TokenType.OPERAND;
  }

  isNumeric(): boolean {
    return this.tokenType === TokenType.NUMBER;
  }

  isSpace(): boolean {
    return this.tokenType === TokenType.SPACE;
  }

  /**
   * Priority of operations according to SymbolList index
   * @param symbol
   * @returns {boolean}
   */
  priorThan(token: Token): boolean {
    let indexParam = SymbolList.findIndex(symbol => symbol.sign === token.symbol.sign);
    let indexCurrent = SymbolList.findIndex(symbol => symbol.sign === this.symbol.sign);
    return indexCurrent < indexParam;
  }
}
