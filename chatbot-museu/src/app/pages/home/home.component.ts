import { Component } from '@angular/core';
import { ArrowRigthComponent } from '../../icons/arrow-rigth/arrow-rigth.component';
import { SparkleComponent } from '../../icons/sparkle/sparkle.component';
import { Router } from '@angular/router';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseunComponent } from '../../icons/museun/museun.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArrowRigthComponent,
    SparkleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {

  }

  openChat() {
    this.router.navigate(["chat"])
  }

}
