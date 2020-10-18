import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './player/create-player/create-player.component';
import { UpdatePlayerComponent } from './player/update-player/update-player.component';
import { PlayersListComponent } from './player/players-list/players-list.component';
import { PlayerService } from './service/player.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlayerComponent,
    UpdatePlayerComponent,
    PlayersListComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
