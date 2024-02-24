import { WebSocketService } from 'src/app/services/Conversation/web-socket.service';
import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private webSocketService:WebSocketService){}
  ngOnInit(): void {

    // this.webSocketService.connect();
  }
  title = 'UpcharDwarfront';


}
