import { Component, inject } from '@angular/core';
import { AngularCommand } from '../../interfaces/angular-command';
import { TerminalService } from '../../services/terminal-service';

@Component({
  selector: 'app-commands-list-component',
  imports: [],
  templateUrl: './commands-list-component.html',
  styleUrl: './commands-list-component.css',
})
export class CommandsListComponent {
  readonly terminalService: TerminalService = inject(TerminalService); 
  readonly angularCommands: AngularCommand[] = this.terminalService.angularCommands;
}
