import { Component } from '@angular/core';
@Component({
  selector:"app-server",
  templateUrl:"./server.component.html"
})
export class ServerComponent{
  ServerId: number =10;
  ServerState: string = " offline  method" ;
  getServerState(){
    return this.ServerState;

  }

}
