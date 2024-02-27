import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseunComponent } from '../../icons/museun/museun.component';
import { Router } from '@angular/router';
import { ChatSugestionsComponent } from '../../components/chat-sugestions/chat-sugestions.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent,
    MuseunComponent,
    ChatSugestionsComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  constructor(private router: Router) {

  }

 
  home() {
    this.router.navigate([""]);
  }
}
