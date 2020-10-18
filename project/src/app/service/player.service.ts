import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { Player } from '../model/model.player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080/api/v1/';
 
  // Métodos get, post, etc. com base no endpoint e tendo como resposta a classe criada 

  // Observable: retorno da api (objeto Player)

  getPlayers() : Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl + "players");
  }

  createPlayer(player: Player) : Observable<Object> {
    return this.http.post(this.baseUrl + "register", player);
  }

  deletePlayer(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/delete/" + id);
  }
}
