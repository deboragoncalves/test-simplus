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

  // Atributo: receber resposta API que será exibida na tabela

  players: Player[];

  constructor(private playerService: PlayerService, private route: Router) { }

  ngOnInit(): void {

    // Get ao iniciar

    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(data => {

      console.log(data);

      this.players = data;

    });
  }

  // Update

  updatePlayer(id: number) {

      // Ir para página de atualização e passar o id do objeto como parâmetro para ser preenchido

      this.route.navigate(['update', id]);

  }

  // Deletar 

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id).subscribe(data => {

      console.log(data)

      // Refresh

      this.ngOnInit()
    
    }, error => console.log(error));
  }
}
