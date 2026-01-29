import { Component, signal, inject } from '@angular/core';
import { TerminalComponent } from './components/terminal-component/terminal-component';

@Component({
  selector: 'app-root',
  imports: [TerminalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web-terminal');
}
