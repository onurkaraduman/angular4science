import {Token} from '../model/token';
import {LexerHelper} from '../helper/lexer-helper';
import {TokenType} from "../type/token-type.enum";
import {ExpressionNotFound} from '../exception/expression-not-found';

/**
 * Lexer analyzer
 */
export class Lexer {

  /**
   * Analyze the free-text expression
   * @param expression
   * @returns {Token[]}
   */
  analyse(expression: string): Token[] {
    let tokens: Token[] = [];
    for (var i = 0; i < expression.length; i++) {
      let occurIndex = i;
      var charOne = expression.charAt(i);
      if (LexerHelper.isSymbol(charOne)) {
        let tokenTmp = this.createToken(charOne, occurIndex, TokenType.OPERAND);
        tokens.push(tokenTmp);
      }
      else if (LexerHelper.isSpace(charOne)) {
        let tokenTmp = this.createToken(charOne, occurIndex, TokenType.SPACE);
        tokens.push(tokenTmp);
      }
      else if (LexerHelper.isNumeric(charOne)) {
        let numberText = charOne;

        for (var j = i + 1; j < expression.length; j++) {
          let charOneTmp = expression.charAt(j);
          if (LexerHelper.isNumeric(charOneTmp)) {
            numberText += charOneTmp;
            i = j;
          }
          else {
            i = j - 1;
            break;
          }
        }
        let tokenNumber = this.createToken(numberText, occurIndex, TokenType.NUMBER);
        tokens.push(tokenNumber);
        continue;
      }
      else {
        throw new ExpressionNotFound();
      }
    }
    return tokens;
  }

  /**
   * Create token from given parameters
   * @param expression
   * @param index
   * @param tokenType
   * @returns {Token}
   */
  private createToken(expression: string, index: number, tokenType: TokenType) {
    if (tokenType === TokenType.NUMBER) {
      return new Token({
        tokenType: tokenType,
        index: index,
        expression: expression,

      });
    }
    else if (tokenType === TokenType.OPERAND) {
      let symbol = LexerHelper.findSymbol(expression);
      return new Token({
        tokenType: tokenType,
        index: index,
        expression: expression,
        symbol: symbol
      });
    }
    else if (tokenType === TokenType.SPACE) {
      let symbol = LexerHelper.findSymbol(expression);
      return new Token({
        tokenType: tokenType,
        index: index,
        expression: expression
      });
    }
  }
}
