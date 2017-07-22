import { Component } from '@angular/core';
@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles:[`
    .online{
      color:white;
    }`]
})
export class ServerComponent{
    ServerId: number =10;
    ServerState: string = "offline" ;
    constructor(){
      this.ServerState = Math.random() > 0.5 ? "online": "offline";
    }
    getServerState(){
        return this.ServerState;
    }
    getColor(){
      return this.ServerState === 'offline' ? 'red' : 'green';
    }
}
