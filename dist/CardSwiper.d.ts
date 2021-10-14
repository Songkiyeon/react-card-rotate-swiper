/// <reference types="react" />
declare type TProps = {
    contents: any;
    onSwipe?: Function;
    className?: string;
    detectingSize?: number;
    throwLimit?: number;
};
export declare const CardSwiper: (props: TProps) => JSX.Element;
export {};
