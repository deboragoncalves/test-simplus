import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlayerComponent } from './player/create-player/create-player.component';

/* PathMatch full: toda a URL. Path register: direciona para o formulário. */

const routes: Routes = [
  { path: 'register', component: CreatePlayerComponent },
  { path: '', redirectTo: 'player', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
