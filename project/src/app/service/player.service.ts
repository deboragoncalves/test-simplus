import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../model/api.response';
import { Observable } from "rxjs/index";
import { Player } from '../model/model.player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080/api/players/';
 
  // Métodos get, post, etc. com base no endpoint e tendo como resposta a classe criada (api response)

  getPlayers() : Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl);
  }

  createPlayer(player: Player) {
    return this.http.post<ApiResponse>(this.baseUrl, player);
  }

  updatePlayer(id: number, player: Player): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + player.id, player);
  }

  deletePlayer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
