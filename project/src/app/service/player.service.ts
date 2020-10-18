import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../model/model.player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080/api/v1/';
 
  // Métodos get, post, etc. com base no endpoint e tendo como resposta a classe criada 

  // Observable: retorno da api (objeto Player)

  getPlayers() {
    return this.http.get<Player[]>(this.baseUrl + "players");
  }

  getPlayerById(id: number) {
    return this.http.get<Player>(this.baseUrl + "players/" + id);
  }

  createPlayer(player: Player) {
    return this.http.post(this.baseUrl + "register", player);
  }

  updatePlayer(id: number, player: Player) {
    return this.http.put(this.baseUrl + "update/" + id, player);
  }

  deletePlayer(id: number) {
    return this.http.delete(this.baseUrl + "/delete/" + id);
  }
}
