export class Button {
  id: number;
  displayedText: string;
  operationName: string;
  enabled: boolean;
  css: string;

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
