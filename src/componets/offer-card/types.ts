export type TLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type TCity = {
    name: string;
    location: TLocation;
}

export type THost = {
    name: string;
    avatarUrl: string;
    isPro: false;
}

export type TOffer = {
    id: number | string;
    title: string;
    type: string;
    price: number;
    city: TCity;
    location:TLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: THost;
    images: string[];
    maxAdults: number;
}
