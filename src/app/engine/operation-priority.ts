import {SymbolType} from './type/symbol-type.enum';
/**
 * Priority of symbols
 */
export class OperationPriority {
  priorities: SymbolType[] = [
    SymbolType.BRACKET1,
    SymbolType.BRACKET2,
    SymbolType.SQUARE_ROOT,
    SymbolType.DIVISION_SLASH,
    SymbolType.ASTERISK,
    SymbolType.TIMES,
    SymbolType.MULTIPLICATION_DOT,
    SymbolType.MOD
  ];
}
