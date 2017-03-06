import {Injectable} from '@angular/core';
import {Board} from './board'
import {Button} from './button'
import {BUTTONS} from './button-archive'
import {Engine} from './engine/engine';

@Injectable()
export class BoardService {

  board: Board;
  calcEngine: Engine;

  constructor() {
    this.board = new Board();
    this.board.setButtons(BUTTONS)
    this.calcEngine = new Engine();
  }

  onButton(value: Button): void {
    this.board.screen.appendExpression(value.operationName);
  }

  getBoard(): Board {
    return this.board;
  }

  eventHandler(event: Button) {
    if (event.operationName === '=') {
      this.calculate();
    }
    else {
      this.board.screen.appendExpression(event.operationName);
    }
  }

  calculate() {
    this.board.screen.expression = this.calcEngine.calculate(this.board.screen.expression).toString();
  }

  clearExpression() {
    this.board.screen.clearExpression();
  }

}
