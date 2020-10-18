import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { ApiResponse } from '../model/api.response';
>>>>>>> 560f2059b1ea62fcd650eb8d406ba94700e26735
import { Observable } from "rxjs/index";
import { Player } from '../model/model.player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080/api/v1/players';
 
  // Métodos get, post, etc. com base no endpoint e tendo como resposta a classe criada 

  // Observable: retorno da api (objeto Player)

  getPlayers() : Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl);
  }

  createPlayer(player: Player) : Observable<Object> {
    return this.http.post(this.baseUrl, player);
  }

<<<<<<< HEAD
  /* updatePlayer(id: number, player: Player): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + player.id, player);
  } */

  deletePlayer(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
=======
  updatePlayer(id: number, player: Player): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + player.id, player);
  }

  deletePlayer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
>>>>>>> 560f2059b1ea62fcd650eb8d406ba94700e26735
  }
}
