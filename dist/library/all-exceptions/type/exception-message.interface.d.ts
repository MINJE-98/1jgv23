import { COUNTRY } from '@app/library/constants';
export declare type ExceptionMessageInterface = Partial<Record<typeof COUNTRY[keyof typeof COUNTRY], string>>;
export declare const isExceptionMessageInterface: (object: any) => object is Partial<Record<"ko" | "en", string>>;
