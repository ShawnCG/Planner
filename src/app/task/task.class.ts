import { ListItem } from '../list/item/list-item.class';

export class Task {
    id: number;
    user_id: number;
    list_id: ListItem;

    items: ListItem[] = [];

    constructor(values: Object = {}) {
        this.assign(values);
    }

    assign(values: Object = {}) {
        Object.assign(this, values);
    }
}
