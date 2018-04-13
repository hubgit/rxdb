import {
  RxDocument
} from './rx-document';

export type RxChangeEventOperation = 'INSERT' | 'UPDATE' | 'REMOVE';

export interface RxChangeEventData<RxDocumentType> {
  readonly col?: string;
  readonly db: string;
  readonly doc?: RxDocument<RxDocumentType>;
  readonly isLocal?: boolean;
  readonly it: string;
  readonly op: RxChangeEventOperation;
  readonly t: number;
  readonly v?: object;
}

export declare class RxChangeEvent<RxDocumentType> {
  data: RxChangeEventData<RxDocumentType>;
  toJSON(): RxChangeEventData<RxDocumentType>;
}
