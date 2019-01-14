import { List } from '../list.class';

export class ListItem {
    id: number;
    list: List;
    content: string;
    position: number;
    status: number;
    created_at: Date;
    updated_at: Date;

    constructor(values: Object = {}) {
        this.assign(values);
    }

    assign(values: Object = {}) {
        Object.assign(this, values);
    }
}
