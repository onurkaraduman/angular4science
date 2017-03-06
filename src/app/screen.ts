export class Screen {
  expression: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  appendExpression(value: string): void {
    if (this.expression === undefined) {
      this.expression = "";
    }
    this.expression += value;
  }

  clearExpression(): void {
    this.expression = '';
  }
}
