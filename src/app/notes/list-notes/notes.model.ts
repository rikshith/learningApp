export interface INotes {
    id?: string;
    content?: string;
}

export class Notes implements INotes {
    constructor(public id?: string, public content?: string) {

    }

}