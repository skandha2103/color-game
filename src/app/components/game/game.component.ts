import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from 'src/app/models/constants';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  score: number = 0;
  life: number = 1;
  curColor:string | undefined;
  intervalHandle:any;
  colors: any = {
    red: false,
    blue: false,
    green: false,
    yellow: false,
    pink:false
  };
  // colors: number[] = [1,2,3,4,5,6];
  activeId: number = 1;
  gamesStarted: boolean = false;
  name:string="";

  constructor(private gameService: GameStateService) { }

  ngOnInit(): void {
    
  }

  onColorClick(colorClicked:string){
    // console.log(colorClicked)
    if(this.life==0)
      return
    if(this.curColor === colorClicked){
      this.score++;
      this.gameService.incrementScore(this.score);
    }
    else{
      this.life--;
      if(this.life==0){
        console.log("Game Over")
        clearInterval(this.intervalHandle);
        this.gameService.updateScoresList(
          {
            name: this.name,
            score: this.score
          }
        )
      }
    }
  }

  getUserName(userName:string){
    this.name = userName;
  }

  onGameStart(gameStarted: boolean){
    // this.gamesStarted = true;
    this.gamesStarted = gameStarted;
    this.score = 0;
    this.life = 1;
    this.intervalHandle = setInterval(() => {
      this.generateRandColor(); 
    }, 2000);
  }

  randomColor():string{
    this.curColor = COLORS[Math.floor(Math.random()*5)];
    this.activeId = Math.floor(Math.random()*5)
    return this.curColor
  }

  generateRandColor(){
    Object.keys(this.colors).forEach((key, value) => {
       this.colors[key] = false;
    })
    this.colors[this.randomColor()] = true;
  }
}
