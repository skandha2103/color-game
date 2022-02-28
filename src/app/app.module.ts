import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { AddNameComponent } from './components/add-name/add-name.component';
import { GameButtonComponent } from './components/game/game-button/game-button.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScoresComponent } from './components/scores/scores.component';
import { ClickColorDirective } from './directives/click-color.directive';
import { CurrentScoreComponent } from './components/current-score/current-score.component';
import { WelcomepipePipe } from './pipes/welcomepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AddNameComponent,
    GameButtonComponent,
    NavbarComponent,
    ScoresComponent,
    ClickColorDirective,
    CurrentScoreComponent,
    WelcomepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
