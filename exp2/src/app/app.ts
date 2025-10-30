import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Registration } from './registration/registration';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Registration],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exp2');
}
