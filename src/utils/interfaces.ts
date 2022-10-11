export interface DescriveType {
    text:string
};

export interface PriceType {
    eth:number,
    usd:number
};

export interface HeaderInfo {
    name:string,
    logo:string,
    price:PriceType[],
    currentIndex:number
};

export interface ImageType {
    links: {
      url:string,
      link:string
    },
};
  
export interface ImageArrType {
    imageArray:ImageType[],
    onChange(index:number):void,
    collUrl:string,
    swiperRef: React.MutableRefObject<null>
};

export interface ImageArray {
    imageArray:ImageType[],
    collUrl:string,
};

export interface CollectionUrl {
    collUrl: string,
    buttonText: string
}

export interface DotType {
    active:boolean
}

export interface ImagePair {
    url_1:string,
    url_2:string
}

export interface PriceTextProps {
    cripto: boolean,
    currentIndex: number,
    priceLength: number,
    totalCost: number,
    price: number
}

export interface PriceProps {
    currentIndex: number,
    totalEth: number,
    totalUsd: number,
    length: number,
    price: PriceType[]
}