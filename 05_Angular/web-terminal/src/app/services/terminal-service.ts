import { Injectable } from '@angular/core';
import { AngularCommand } from '../interfaces/angular-command';

@Injectable({
  providedIn: 'root',
})
export class TerminalService {
  readonly angularCommands: AngularCommand[] = [
    {
      command: 'ng new demo-app',
      alias: null,
      description: 'Creates a new Angular application.',
      explanation:
        'This command initializes a new Angular workspace with a default application. ' +
        'It sets up configuration files, installs dependencies, and creates the basic project structure.',
      success: [
        '✔ Workspace created successfully.',
        '✔ Application files generated.',
        '✔ Dependencies installed.',
        '➡ Navigate to the project folder to get started.',
      ],
    },

    {
      command: 'ng serve',
      alias: 'ng s',
      description: 'Runs the Angular application locally.',
      explanation:
        'Builds the application in memory and starts a local development server. ' +
        'The app automatically reloads when source files change.',
      success: [
        '✔ Compiled successfully.',
        '✔ Development server running.',
        '➡ Open http://localhost:4200/ in your browser.',
      ],
    },

    {
      command: 'ng build',
      alias: null,
      description: 'Builds the Angular application.',
      explanation:
        'Compiles the Angular app into static files for deployment. ' +
        'By default, it creates a development build.',
      success: [
        '✔ Browser application bundle generation complete.',
        '✔ Build artifacts written to dist/ directory.',
      ],
    },

    {
      command: 'ng build --prod',
      alias: null,
      description: 'Creates a production-ready build.',
      explanation:
        'Runs the build optimizer, enables Ahead-of-Time compilation, and minifies output files ' +
        'for better performance and smaller bundle size.',
      success: [
        '✔ Production build completed.',
        '✔ Optimized bundles generated.',
        '✔ Ready for deployment.',
      ],
    },

    {
      command: 'ng generate component demo-component',
      alias: 'ng g c demo-component',
      description: 'Generates a new component.',
      explanation:
        'Creates a component with its HTML, CSS, TypeScript, and spec files, ' +
        'and automatically registers it with the nearest module.',
      success: ['✔ Component files created.', '✔ Component registered successfully.'],
    },

    {
      command: 'ng generate service demo-service',
      alias: 'ng g s demo-service',
      description: 'Generates a new service.',
      explanation:
        'Creates an injectable service class used for business logic or data access. ' +
        'The service is provided at the root level by default.',
      success: ['✔ Service file created.', '✔ Injectable decorator added.'],
    },

    {
      command: 'ng test',
      alias: null,
      description: 'Runs unit tests.',
      explanation: 'Executes unit tests using Karma and Jasmine in watch mode by default.',
      success: ['✔ Test runner launched.', '✔ All tests executed successfully.'],
    },

    {
      command: 'ng lint',
      alias: null,
      description: 'Runs linting checks.',
      explanation:
        'Analyzes the codebase for potential errors and style issues using configured linting rules.',
      success: ['✔ Linting completed.', '✔ No issues found.'],
    },

    {
      command: 'ng update',
      alias: null,
      description: 'Updates Angular packages.',
      explanation:
        'Updates Angular core, CLI, and related dependencies while applying required migrations.',
      success: ['✔ Packages updated successfully.', '✔ Migrations executed.'],
    },
  ];
}
