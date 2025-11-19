import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './dashboard/shared/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MyDashboard');
}
