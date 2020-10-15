import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { Player } from 'src/app/model/model.player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  // Atributo: receber resposta API

  players: Player[];

  constructor(private playerService: PlayerService, private route: Router) { }

  ngOnInit(): void {

    // Get ao iniciar

    this.playerService.getPlayers().subscribe((data: Player[]) => {
      console.log(data);
      this.players = data;
    });
  }

}
