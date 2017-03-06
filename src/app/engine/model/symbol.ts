import {SymbolType} from '../type/symbol-type.enum';
/**
 * Operand model for calculator
 */
export class Symbol {
  name: SymbolType;
  sign: string;

  constructor(values: Object[]) {
    Object.assign(this, values);
  }
}
