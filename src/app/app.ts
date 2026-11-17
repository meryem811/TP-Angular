
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './toast/toast.component';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

