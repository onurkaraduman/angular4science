import {Component, OnInit, Input} from '@angular/core';
import {Button} from '../button'
import {BoardService} from '../board.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private boardService: BoardService) {

  }

  @Input()
  button: Button;

  onClick() {
    console.log(this.button.displayedText);
    this.boardService.eventHandler(this.button);
  }
}
