import {USERS} from './Database';

export const POSTS = [
  {
    imageUrl:
      'https://images.unsplash.com/flagged/photo-1575388105878-0ff8d276d368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGJlYWNofGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    user: USERS[0].user,
    likes: 800,
    caption: ' whereever you go i will follow',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'john',
        comment: 'nice..',
      },
      {
        user: 'peter',
        comment: 'Superb..',
      },
      {
        user: 'Edward',
        comment: 'wow...!!!',
      },
    ],
  },
  {
    imageUrl:
      'https://cdn.allamericanatlas.com/wp-content/uploads/2020/07/Florida-beaches-1-1024x683.jpg?lossy=1&ssl=1',
    user: USERS[1].user,
    likes: 790,
    caption: ' Walking on the way',
    profile_picture: USERS[1].image,
    comments: [],
  },
  {
    imageUrl:
      'https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2021/12/shutterstock-woman-celebrating-against-sky-with-sunhat-featured-122021.jpg',
    user: USERS[2].user,
    likes: 1010,
    caption: ' So much energytic today',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'vicky',
        comment: 'nice..',
      },
      {
        user: 'krish',
        comment: 'Superb..',
      },
      {
        user: 'ram',
        comment: 'wow...!!!',
      },
    ],
  },
];
