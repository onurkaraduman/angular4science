import {Symbol} from '../model/symbol';
import {SymbolType} from '../type/symbol-type.enum';
/**
 * Operand list for calculating
 */
export const SymbolList: Symbol[] = [
  {name: SymbolType.PARENTHESES1, sign: '('},
  {name: SymbolType.PARENTHESES2, sign: ')'},
  {name: SymbolType.CARET, sign: '^'},
  {name: SymbolType.ASTERISK, sign: '*'},
  {name: SymbolType.MULTIPLICATION_DOT, sign: '.'},
  {name: SymbolType.TIMES, sign: 'x'},
  {name: SymbolType.DIVISION_SLASH, sign: '/'},
  {name: SymbolType.PERCENT, sign: '%'},
  {name: SymbolType.MOD, sign: 'mod'},
  {name: SymbolType.SQUARE_ROOT, sign: 'sqrt'},
  {name: SymbolType.GRAD, sign: 'grad'},
  {name: SymbolType.RAD, sign: 'rad'},
  {name: SymbolType.PI, sign: 'pi'},
  {name: SymbolType.PLUS, sign: '+'},
  {name: SymbolType.MINUS, sign: '-'},
  {name: SymbolType.BRACKET1, sign: '['},
  {name: SymbolType.BRACKET2, sign: ']'}
];

