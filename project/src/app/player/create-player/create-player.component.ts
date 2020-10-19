import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service'
import { Player } from 'src/app/model/model.player'

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})

export class CreatePlayerComponent implements OnInit {

  // Inicializar classe Player

  player : Player = new Player();

  constructor(private playerService: PlayerService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  submit(name: string, position: string, height: number) {

    if (name) {
      if (position) {
        if (height) {
          // Post

          this.playerService.createPlayer(this.player).subscribe(data => {

          // Ir para lista
  
          this.router.navigateByUrl('/players');
  
          }, error => console.log(error));
  
        // Limpar 
  
        this.player = new Player();

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
      });
    }

      
  }

}
