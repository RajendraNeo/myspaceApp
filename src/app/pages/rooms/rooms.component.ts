import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/core/models/room';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  isLoader:boolean=false;
  roomsData:Room[]=[];
  createFromToggle:boolean=false;

  roomObj={
    roomId: 0,
    roomName: "",
    roomLocation: "",
    roomSeatingCapacity: 0,
    isRoomActive: false,
    clientId: 0,
    createdDate: "2023-06-19T19:25:35.648Z",
    lastUpdatetd: "2023-06-19T19:25:35.648Z"
  };
  constructor(private _roomService:RoomService) { 
    const userData=localStorage.getItem("logInUserData");
    if(userData != null){
      const userParseData=JSON.parse(userData);
      this.roomObj.clientId=userParseData.clientId;
      this.loadRoomById();
    }
  }

  ngOnInit(): void {
  }

  loadRoomById(){
    this._roomService.getRoomById(this.roomObj.clientId).subscribe((response)=>{
      this.roomsData=response.data;
    })
  }
  createRoom(){
    this.isLoader=true;
    this._roomService.createRoom(this.roomObj).subscribe((response)=>{
      if(response.result){
        this.isLoader=false;
        this.loadRoomById();
        alert(response.message);
      }else{
        alert(response.message);
      }
    })
  }

  resetRoom(){
   this.roomObj={
      roomId: 0,
      roomName: "",
      roomLocation: "",
      roomSeatingCapacity: 0,
      isRoomActive: true,
      clientId: 0,
      createdDate: "",
      lastUpdatetd: ""
    }
  }

  openCreateFrom(){
    this.createFromToggle=!this.createFromToggle;
  }
}
