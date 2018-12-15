export class FilterForm {
    checked:boolean;
    constructor(
        readonly type: string,
        readonly value: string,
        checked: boolean) {
            this.checked = checked;
        }
}