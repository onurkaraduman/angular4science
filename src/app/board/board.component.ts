import {Component, OnInit} from '@angular/core';
import {BoardService} from '../board.service'
import {Board} from '../board'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private boardService: BoardService) {
    this.board = this.boardService.getBoard();
  }

  ngOnInit() {
  }

  clear() {
    this.boardService.clearExpression();
  }
}
