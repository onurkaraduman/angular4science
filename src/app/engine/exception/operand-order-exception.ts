export class OperandOrderException extends Error {
  index: number;
  operand: string;

  constructor(index: number, operand: string) {
    super('The expression is not applicable. Line:' + index);
    this.index = index;
    this.operand = operand;
  }
}
