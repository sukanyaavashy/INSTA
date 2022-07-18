import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {VIDEODATA} from '../../data/Database';
import SingleReel from './SingleReel';

// export const VIDEODATA = [
//   {
//     video: require('../assets/videos/video1.mp4'),
//     postProfile: ('https://i0.wp.com/bloggers.society19.com/wp-content/uploads/2015/11/water-40.jpg?resize=563%2C755&ssl=1'),
//     title: 'Andria',
//     description: 'Feel the buity of nature',
//     likes: '245k',
//     isLike: false,
//   },
//   {
//     video: require('../assets/videos/video2.mp4'),
//     postProfile: ("https://images.unsplash.com/photo-1615912844755-bd8b6dd6789e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHw%3D&w=1000&q=80',"),
//     title: 'Catherin',
//     description: "It's a tea time",
//     likes: '656k',
//     isLike: false,
//   },
//   {
//     video: require('../assets/videos/video2.mp4'),
//     postProfile: ('https://www.galaxymarketing.global/wp-content/uploads/2021/06/image-181-3.jpg'),
//     title: 'Jessy',
//     description: 'Feel the buity of nature',
//     likes: '243k',
//     isLike: false,
//   },
//   {
//     video: require('../assets/videos/video2.mp4'),
//     postProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HuL4FEl6A53Ec25nbO10c1i2txsAu0HXyHHvT9JWEZma7xK1tupllHJeVqtLILNOrBY&usqp=CAU',
//     title: 'Prince',
//     description: 'How cute it is !!',
//     likes: '876k',
//     isLike: false,
//   },
// ];

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={VIDEODATA}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelsComponent;