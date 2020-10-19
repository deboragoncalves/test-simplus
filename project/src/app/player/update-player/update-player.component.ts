import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/model/model.player';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  player: Player = new Player();

  id: number;

  constructor(private playerService: PlayerService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

      // Pegar o id que foi passado pelo router 

      this.id = this.route.snapshot.params['id'];

      // Get player pelo id

      this.playerService.getPlayerById(this.id).subscribe(data => {

      this.player = data;

      }, error => console.log(error));
  }

  submit() {
    this.playerService.updatePlayer(this.id, this.player).subscribe(data => {
      
      // Ir para lista

      this.router.navigateByUrl('/players');
      
    }, error => console.log(error));
  }

}
