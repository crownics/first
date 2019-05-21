import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
