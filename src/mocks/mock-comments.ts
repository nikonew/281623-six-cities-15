import { TComment } from '../types/types';

const COMMENT_COUNT = 1;

export const createComments: TComment =
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: new Date('2019-05-08T14:13:56.569Z'),
    user: {
      name: 'Oliver Conner',
      avatarUrl: '../img/avatar-angelina.jpg',
      isPro: false,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  };

let id = 0;

const generateComments: () => TComment = () => ({...createComments,id: String(id++)});

export const comments = Array.from({length: COMMENT_COUNT}, generateComments);

