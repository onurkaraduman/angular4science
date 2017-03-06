import {Component, OnInit, Input} from '@angular/core';
import {Screen} from '../screen';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
  }

  @Input()
  screen: Screen;

  onKey(event: any) { // without type info
    this.boardService.calculate();
  }
}
