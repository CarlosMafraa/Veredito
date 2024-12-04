import { Component } from '@angular/core';
import {HeaderComponent} from '../../shareds/modules/header/header.component';
import {MenuComponent} from '../../shareds/modules/menu/menu.component';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {

}
