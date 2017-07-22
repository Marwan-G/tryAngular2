import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = false;
    serverCreationStatus = "no server created yet";
    ServerName: string ="Marwan";
    serverCreated: boolean = false;
    servers = ["server1", "server2"];

  constructor() {
     setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000);

   }
  ngOnInit() {
  }

  UpdateServerName(event: Event){
    console.log(event)
    this.ServerName= (<HTMLInputElement>event.target).value;
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.ServerName);
    this.serverCreationStatus=" Server was created " + this.ServerName ;
  }
}
