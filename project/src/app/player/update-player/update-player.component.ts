import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/model/model.player';
import { PlayerService } from 'src/app/service/player.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  player: Player = new Player();

  id: number;

  constructor(private playerService: PlayerService, private route: ActivatedRoute,
    private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {

      // Pegar o id que foi passado pelo router 

      this.id = this.route.snapshot.params['id'];

      // Get player pelo id

      this.playerService.getPlayerById(this.id).subscribe(data => {

      this.player = data;

      }, error => console.log(error));
  }

  submit() {

    if (this.player.name) {

      if (this.player.position) {
        if (this.player.height) {
          this.playerService.updatePlayer(this.id, this.player).subscribe(data => {

            this.router.navigateByUrl('/players');
      
          }, error => console.log(error));
        } else {
          this.toast.warning('O campo Altura está vazio.', 'Altura', {
            timeOut: 5000
          });
        }
      } else {
        this.toast.warning('O campo Posição está vazio.', 'Posição', {
          timeOut: 5000
        });
      }
    } else {
      this.toast.warning('O campo Nome está vazio.', 'Nome', {
        timeOut: 5000
      })
    }
    
  }

}
