import { Component, OnInit } from '@angular/core';
import { ScoreData } from 'src/app/models/ScoreData';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scoresData: ScoreData[] = [];
  constructor(private gameService: GameStateService) { }

  ngOnInit(): void {
    // this.scoresData = [
    //   {
    //     name: "Scan",
    //     score:100
    //   },
    //   {
    //     name: "San",
    //     score:150
    //   },
    //   {
    //     name: "Mar",
    //     score:200
    //   }
    // ]
    this.scoresData = this.gameService.getScoresList();
  }

}
