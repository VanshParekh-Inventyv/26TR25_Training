export interface AngularCommand {
    command: string;
    alias?: string | null;
    description: string;
    explanation: string;
    success: string[];
}
