import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  uri = 'http://localhost:4000';
  constructor(private http: HttpClient ) { }

  getPlayers(){
    return this.http.get(`${this.uri}/players`);
  }

  getPlayerById(id){
    return this.http.get(`${this.uri}/player/${id}`);
  }

  addPlayer(name, ranking, score, time, games, status) {
    const player_to_add = {
        name: name,
        ranking: ranking,
        score: score,
        time: time,
        games: games,
        status: status
    };
    return this.http.post(`${this.uri}/player/add`, player_to_add);
  }


  updatePlayer(name, ranking, score, time, favoGame, status, id){
    const player_to_update = {
        name: name,
        ranking : ranking,
        score : score,
        time: time,
        favoGame: favoGame,
        status: status
    };
    return this.http.post(`${this.uri}/player/update/${id}`, player_to_update);
  }

  deletePlayer(id){
    return this.http.get(`${this.uri}/player/delete/${id}`);
  }
}
