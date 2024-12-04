import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    MenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
