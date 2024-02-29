import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseunComponent } from '../../icons/museun/museun.component';
import { Router } from '@angular/router';
import { ChatSugestionsComponent } from '../../components/chat-sugestions/chat-sugestions.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/Message.type';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';
import { MessagesService } from '../../services/messages-service';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent,
    MuseunComponent,
    ChatSugestionsComponent,
    CommonModule,
    ChatDialogComponent
  ],
  providers: [

    MessagesService
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  constructor(private router: Router,
    private service: MessagesService) {

  }
  questions: Message[] = JSON.parse(localStorage.getItem("questions") ?? "[]");

  updateLocalStorage() {
    localStorage.setItem("questions", JSON.stringify(this.questions))
  }


  sendSuggestQuestion(question: string) {
    this.questions.push({
      type: 'request',
      message: question
    });

    this.updateLocalStorage();
    this.sendMessage(question)

  }

  home() {
    this.router.navigate([""]);
  }
  sendMessage(message: string) {
    this.service.sendData(message).subscribe({
      next: (body) => {
        this.questions.push({
          type: "response",
          message: body.response
        })
        this.updateLocalStorage();
    console.log(body)

      }
    })

  }


}

