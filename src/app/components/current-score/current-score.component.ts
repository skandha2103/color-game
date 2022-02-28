import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-current-score',
  templateUrl: './current-score.component.html',
  styleUrls: ['./current-score.component.css']
})
export class CurrentScoreComponent implements OnInit, OnDestroy {

  sr: number = 0;
  private sub: Subscription = new Subscription();

  constructor(private gameService: GameStateService) {
   }

  ngOnInit(): void {
    console.log("abc");
    this.sub = this.gameService.getScoreSub().subscribe((newScore:number)=>{
        this.sr = newScore;
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
