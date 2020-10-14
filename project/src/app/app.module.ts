import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './player/create-player/create-player.component';
import { UpdatePlayerComponent } from './player/update-player/update-player.component';
import { PlayersListComponent } from './player/players-list/players-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlayerComponent,
    UpdatePlayerComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
