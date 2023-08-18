import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {icons, images, SIZES, COLORS, FONTS} from '@/constants';

export const categoryData = [
  {
    id: 1,
    name: 'Ưu đãi đặc biệt',
    icon: icons.hotpot,
  },
  {
    id: 2,
    name: 'cập nhật từ nhà',
  },
  {
    id: 3,
    name: '#ST Hotpot',
  },
  {
    id: 4,
    name: 'Đồ uống',
  },
  {
    id: 5,
    name: 'Khác',
  },
];

// price rating
export const affordable = 1;

export const restaurantData = [
  {
    id: 1,
    name: 'XÀ BÌ CHƯỞNG- DEAL LINH ĐÌNH',
    rating: '01/02',
    categories: [1],
    priceRating: affordable,
    photo: images.xabichuong,
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
  },
  {
    id: 2,
    name: 'KÈO THƠM KHÔNG THỂ LỠ - ',
    rating: '03/02',
    categories: [1],
    priceRating: affordable,
    photo: images.bean499,
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
  },
  {
    id: 3,
    name: 'HighLand Coffee Biên Hòa',
    rating: 4.5,
    categories: [1],
    priceRating: affordable,
    photo: images.highlands,
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
  },
  {
    id: 4,
    name: 'KÈO THƠM KHÔNG THỂ LỠ - ',
    rating: '03/02',
    categories: [1],
    priceRating: affordable,
    photo: images.bean499,
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
  },
  {
    id: 5,
    name: '"KÈO THƠM 19" - RƯỚC DEAL LINH ĐÌNH',
    rating: '01/02',
    categories: [1],
    priceRating: affordable,
    photo: images.caphe19k,
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
  },
  {
    id: 7,
    name: 'KÈO THƠM KHÔNG THỂ LỠ - ',
    rating: '03/02',
    categories: [1],
    priceRating: affordable,
    photo: images.bean499,
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
  },
  {
    id: 8,
    name: '"KÈO THƠM 19" - RƯỚC DEAL LINH ĐÌNH',
    rating: '01/02',
    categories: [1],
    priceRating: affordable,
    photo: images.caphe19k,
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
  },
];
const datass = {categoryData, restaurantData};

export default datass;
