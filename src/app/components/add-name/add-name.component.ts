import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {

  name:string ="";
  @Output() gameStart: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();
  gameStarted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(){
    // console.log(this.name)
  }

  onSubmit(){
    this.gameStarted = true;
    this.gameStart.emit(this.gameStarted);
    this.username.emit(this.name);
  }

}
