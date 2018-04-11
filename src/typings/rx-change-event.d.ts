export declare class RxChangeEvent {
    data: {
        readonly op: 'INSERT' | 'UPDATE' | 'REMOVE';
        readonly t: number;
        readonly db: string;
        readonly col: string;
        readonly it: string;
        readonly doc: object;
        readonly v: object
    }
    toJSON(): any;
}
