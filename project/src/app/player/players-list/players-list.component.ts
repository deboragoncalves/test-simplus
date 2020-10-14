import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  // Resposta api

  players: Observable<ApiResponse>;

  constructor(private playerService: PlayerService, private route: Router) { }

  ngOnInit(): void {
    // Get ao iniciar

    this.playerService.getPlayers();
  }

}
