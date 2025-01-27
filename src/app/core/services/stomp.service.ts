import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

@Injectable({
  providedIn: 'root',
})
export class StompService {
  // creating a webSocket using SockJS
  socket = new SockJS('http://localhost:8080/api/v1/stomp-endpoint');
  // initialize a Stomp client using the webSocket
  stompClient = Stomp.over(this.socket);

  constructor() {
    this.stompClient.debug = () => {}; // dissable debuging

    // connect to the WebSocket server
    this.stompClient.connect({}, (): any => {
      // console.log(`socket connected to server`);
    });
  }

  // sub to a topic and provide a callback fn to handle incoming messages
  subscribe(topic: string, callback: any): Subscription {
    return this.stompClient.subscribe('/topic/' + topic, (frame: any): any => {
      // parse msg body and pass it to callback fn
      callback(JSON.parse(frame.body));
    });
  }

  // Send a message to a specific application using Stomp
  send(app: string, data: any) {
    // Send the data as a JSON string to the specified application
    this.stompClient.send('/app/' + app, {}, JSON.stringify(data));
  }
}
