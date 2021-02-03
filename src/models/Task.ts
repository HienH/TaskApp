export class ITask {
    id: number;
    text: string;
    day: string;
    reminder: boolean;

    constructor() {
        this.id = 0;
        this.text = '';
        this.day = '';
        this.reminder = false;
    }
}