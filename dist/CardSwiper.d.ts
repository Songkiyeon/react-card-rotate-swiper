/// <reference types="react" />
declare type TProps = {
    contents: any;
    onSwipe?: Function;
    className?: string;
    detectingSize?: number;
    throwLimit?: number;
};
declare function CardSwiper(props: TProps): JSX.Element;
export default CardSwiper;
