
import { ChatService } from 'src/app/services/Conversation/chat.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { WebSocketService } from 'src/app/services/Conversation/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentUser: any;
  text: string = '';
  contacts: any[] = [];
  activeContact: any;
  messages: any[] = [];
  private stompClient: any;

  constructor(private router: Router, private userService: ChatService,  private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
    this.connect();
    this.loadContacts();
  }

  connect(): void {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => this.onConnected(), (err: any) => this.onError(err));
  }

  contactji(contact: any[]) {
    this.activeContact = contact;
    this.onConnected();
  }

  onConnected() {
    if (this.activeContact) {
      console.log('user/' + this.currentUser.id + '_' + this.activeContact.id + '/queue/messages');

      this.stompClient.subscribe('/user/' + this.currentUser.id + '_' + this.activeContact.id + '/queue/messages', function (message: any) {
        // Handle incoming messages
        console.log('Received message:', message.body);
      });
    }
  }


  onError = (err: any): void => {
    console.log(err);
  }
  setActiveContact(contact: any): void {
    this.activeContact = contact;
    this.messages = [];
    this.loadMessages();
  }

  onMessageReceived(msg: { body: string; }): void {
    const notification = JSON.parse(msg.body);
    if (this.activeContact && notification.senderId === this.activeContact.id) {
      this.findChatMessage(notification.id).then((message) => {
        this.messages.push(message);
      });
    }
    this.loadContacts();
  }

  findChatMessage(id: any): Promise<any> {
    return this.userService.findChatMessage(id);
  }

  sendMessage(): void {
    console.log("send message");

    if (this.text.trim() !== '') {
      const message = {
        senderId: this.currentUser.id,
        recipientId: this.activeContact.id,
        senderName: this.currentUser.name,
        recipientName: this.activeContact.name,
        content: this.text,
        timestamp: new Date()
      };
      console.log(message);

      this.stompClient.send('/app/chat', {}, JSON.stringify(message));
      this.messages.push(message);
      this.text = '';
    }
  }

  loadContacts(): void {
    this.getallUsers();
  }

  getallUsers() {


    this.webSocketService.getalluser().subscribe((data: any) => {
      this.contacts = data.body.users;
      console.log("///////////////log contacts");

      console.log(this.contacts);////////////////////////
    }), (error: any) => {
      console.log("error");
      console.log(error);
      alert("error at finds Users!!!!")
    }
  }


  loadMessages(): void {
    this.findChatMessage(this.activeContact.id).then((messages) => {
      this.messages = messages;
    }).catch
  }
}
