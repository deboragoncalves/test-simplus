import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlayerComponent } from './player/create-player/create-player.component';
import { PlayersListComponent } from './player/players-list/players-list.component';
import { UpdatePlayerComponent } from './player/update-player/update-player.component';

/* PathMatch full: toda a URL. Path register: direciona para o formulário. */

const routes: Routes = [
  { path: 'players', component: PlayersListComponent },
  { path: 'register', component: CreatePlayerComponent },
  { path: 'update/:id', component: UpdatePlayerComponent },
  { path: '', redirectTo: 'players', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
