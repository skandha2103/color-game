import { Injectable } from '@angular/core';
import { COLORS } from '../models/constants';
import { ScoreData } from '../models/ScoreData';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  scoresList: ScoreData[]=[];
  localItem: string="";
  private subject = new Subject<number>();

  constructor() { 
  }

  randomColor(){
    return COLORS[Math.floor(Math.random()*5)]
  }

  incrementScore(score: number){
    this.subject.next(score);
  }

  getScoreSub(): Subject<number>{
    return this.subject;
  }

  getScoresList(){
    this.localItem = localStorage.getItem("scores") || '{}';
    if(this.localItem){
      this.scoresList = JSON.parse(this.localItem);
    }
    else{
      this.scoresList = [];
    }
    return this.scoresList;
  }

  updateScoresList(scoreObj:ScoreData){
    this.scoresList.unshift(scoreObj);
    if(this.scoresList.length > 10)
      this.scoresList.pop()
    localStorage.setItem("scores",JSON.stringify(this.scoresList));
  }

}
