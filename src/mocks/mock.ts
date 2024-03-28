import { TOffer } from '../types/types';


export const CITIES: (string)[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DESCRIPTIONS: (string)[] = [
  'Lorem ipsum dolor sit amet',
  'Fusce tristique felis at fermentum pharetra',
  'Aliquam id orci ut lectus varius viverra',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui',
  'Sed sed nisi sed augue convallis suscipit in sed felis',
];

const OFFER_COUNT = 5;

const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


export const getRandomArrayElement = <T> (array: T[]) => array[Math.floor(Math.random() * array.length)];


export const createOffer: TOffer =
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: getRandomNumber(100,10000),
    city: {
      name: getRandomArrayElement(CITIES),
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: getRandomNumber(0, 4),
    description: getRandomArrayElement(DESCRIPTIONS),
    bedrooms: getRandomNumber(0, 4),
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: '../img/avatar-max.jpg',
      isPro: false
    },
    images: [
      '../img/apartment-01.jpg',
      '../img/apartment-02.jpg',
      '../img/apartment-03.jpg'
    ],
    maxAdults: getRandomNumber(0, 4)
  };

let id = 0;

const generateOffer: () => TOffer = () => ({
  ...createOffer,
  id: String(id++),
  price: getRandomNumber(10,100),
  rating: getRandomNumber(3, 4),
});

export const offers = Array.from({length: OFFER_COUNT}, generateOffer);


