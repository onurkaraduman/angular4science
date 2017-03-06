import {Screen} from './screen';
import {Button} from './button';
import {OnInit} from "@angular/core";

export class Board {

  screen: Screen;
  buttons: Button[];

  constructor() {
    this.screen = new Screen();
  }

  setButtons(values: Button[]) {
    this.buttons = values;
  }
}
