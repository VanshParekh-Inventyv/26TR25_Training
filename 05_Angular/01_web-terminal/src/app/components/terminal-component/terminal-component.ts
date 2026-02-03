import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommandsListComponent } from '../commands-list-component/commands-list-component';
import { AngularCommand } from '../../interfaces/angular-command';
import { TerminalService } from '../../services/terminal-service';

@Component({
  selector: 'app-terminal-component',
  standalone: true,
  imports: [CommandsListComponent, FormsModule],
  templateUrl: './terminal-component.html',
  styleUrl: './terminal-component.css',
})
export class TerminalComponent {
  readonly terminalService: TerminalService = inject(TerminalService);
  readonly angularCommands: AngularCommand[] = this.terminalService.angularCommands;

  history: any[] = [];
  inputCmd = '';

  onEnter() {
    const input = this.inputCmd.trim();
    if (!input) return;

    // CLS command
    if (input === 'cls') {
      this.history = [];
      this.inputCmd = '';
      return;
    }

    // clear input
    this.inputCmd = '';

    const entry: any = {
      command: input,
    };

    this.history.push(entry);

    const matchedCommand = this.angularCommands.find(
      (ngCmd) => ngCmd.command === input || ngCmd.alias === input,
    );

    if (matchedCommand) {
      entry.description = matchedCommand.description;
      entry.explanation = matchedCommand.explanation;
      entry.success = matchedCommand.success;
    } else {
      entry.error = 'Command not found';
    }
  }
}
