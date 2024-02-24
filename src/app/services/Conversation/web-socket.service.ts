import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { ApiRoutes } from 'src/app/utils/Api-Routes';
import baseUrl from '../user/helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {



  constructor(private http:HttpClient) { }
  private stompClient: any;


  initializeWebSocketConnection() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);

    this.connect();
  }

  connect() {
    this.stompClient.connect({}, (_frame: string) => {
      console.log('Connected: ' + _frame);
    });
  }

  sendmessage(message: any) {
    console.log(message);
    return this.stompClient.send('/app/chat', {}, JSON.stringify(message));
  }

  subscribeMessage(destination:string){
    return new Observable<any>((observer) => {
      this.stompClient.subscribe(destination, (messages: { body: any; }) => {
        // Handle incoming messages
        console.log(messages);
        observer.next(JSON.parse(messages.body));
      })
    });
  }

  getmessage(senderId:any,RecieverId:any){
    return this.http.get(ApiRoutes.GET_MESSAGEBY_USERS_IDS+`/${senderId}/${RecieverId}`);
  }

  disConnect() {
    this.stompClient.disconnect();
  }

  getalluser(){

    return this.http.get(ApiRoutes.GET_ALL_USERS_FROM_USER_TABLE);

  }

}
