import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}


  getCurrentUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  findChatMessage(id: any): Promise<any> {
    return this.http.get<any>(this.apiUrl + '/messages/' + id).toPromise();
  }

  countNewMessages(senderId: any, recipientId: any): Promise<any> {
    return this.http.get<any>(this.apiUrl + '/messages/count?senderId=' + senderId + '&recipientId=' + recipientId).toPromise();
  }

}
