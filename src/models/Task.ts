export class ITask {
    id: number;
    text: string;
    date: string;
    reminder: boolean;

    constructor() {
        this.id = 0;
        this.text = '';
        this.date = '';
        this.reminder = false;
    }
}