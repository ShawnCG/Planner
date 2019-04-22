export class BoardItem {

    title: string;
    content: string;

    constructor(values: Object) {
        this.assign(values);
    }

    assign(values: Object = {}) {
        Object.assign(this, values);
    }
}