import { Component, Input, OnInit, Renderer2, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit, OnChanges{

  @Input() color:string = "";
  @Input() active: boolean = false;
  @Output() colorClicked: EventEmitter<string> = new EventEmitter();
  @Input() gs:boolean = false;

  constructor(private gameService: GameStateService) { 
    
  }

  ngOnInit(): void {
    // console.log(this.gs);
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log(changes);
  }

  onClick()
  {
    // console.log(this.color)
    this.colorClicked.emit(this.color);
  }  
}
