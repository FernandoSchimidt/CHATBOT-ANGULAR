import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuestionComponent } from '../../icons/question/question.component';
import { HistoryComponent } from '../../icons/history/history.component';
import { CuriosityComponent } from '../../icons/curiosity/curiosity.component';

@Component({
  selector: 'chat-sugestions',
  standalone: true,
  imports: [
    CommonModule,
    QuestionComponent,
    HistoryComponent,
    CuriosityComponent
  ],
  templateUrl: './chat-sugestions.component.html',
  styleUrl: './chat-sugestions.component.scss'
})
export class ChatSugestionsComponent {
  suggestionTopics = [
    {
      title: "Duvidas",
      icon: 'doubt',
      questions: ["Qual o valor para entrar no museu?",
        "Quando o museu está aberto?"]
    },
    {
      title: "Curioidades",
      icon: 'curiosity',
      questions: ["Quem era o prefeito na época da criação?",
        "Quantos cômodos existem no museu?",
        "Quantas peças estão exibidas no museu?"]
    },
    {
      title: "Curiosidades",
      icon: 'history',
      questions: ["Quando o museu foi criado?",
        "Qual o estilo arquitetônico do prédio?",
        "Quem foi o arquiteto do prédio?"]
    }
  ]
}
