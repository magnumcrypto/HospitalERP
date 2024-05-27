import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavMenuComponent, MdbRippleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HospitalERP';
}
