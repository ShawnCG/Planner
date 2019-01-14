import { ListItem } from './item/list-item.class';

export class List {
    id: number;
    user_id: number;
    pri_list_item: ListItem = new ListItem();
    parent_id: number;

    items: ListItem[] = [];

    constructor(values: Object = {}) {
        this.assign(values);
    }

    assign(values: Object = {}): List {
        Object.assign(this, values);

        return this;
    }

    get content(): string {
        return this.pri_list_item.content;
    }
    set content(value) {
        this.pri_list_item.content = value;
    }

    get position(): number {
        return this.pri_list_item.position;
    }
    set position(value: number) {
        this.pri_list_item.position = value;
    }

    get status(): number {
        return this.pri_list_item.status;
    }
    set status(value: number) {
        this.pri_list_item.status = value;
    }

    get created_at(): Date {
        return this.pri_list_item.created_at;
    }
    set created_at(value: Date) {
        this.pri_list_item.created_at = value;
    }

    get updated_at(): Date {
        return this.pri_list_item.updated_at;
    }
    set updated_at(value: Date) {
        this.pri_list_item.updated_at = value;
    }
}
