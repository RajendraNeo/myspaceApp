import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl="/api/Meeting/";
  constructor(private _http:HttpClient) { }

  createRoom(roomObj:any):Observable<any>{
    return this._http.post(`${this.baseUrl}/CreateRoom`,roomObj);
  }

  getRoomById(roomId:number):Observable<any>{
    return this._http.get<any>(`${this.baseUrl}/GetAllRoomsByClientId?id=${roomId}`);
  }
}
