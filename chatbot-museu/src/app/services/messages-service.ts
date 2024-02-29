import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageResponse } from '../types/Message-response.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private endpointUrl = 'http://localhost:8080/api/chat';

  constructor(private http: HttpClient) { }

  sendData(message: string): Observable<MessageResponse> {
    const data = { message };
    return this.http.post<MessageResponse>(this.endpointUrl, data);
  }
}