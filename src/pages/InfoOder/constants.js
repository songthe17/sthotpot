import {COLORS, SIZES, icons, images} from '@/constants/';
export const categoryData = [
  {
    id: 1,
    name: 'Trà sữa',
    icon: require('@/assets/icons/milk-tea.png'),
  },
  {
    id: 2,
    name: 'Cà phê',
    icon: require('@/assets/icons/coffee-cup.png'),
  },
  {
    id: 3,
    name: 'Trà trái cây',
    icon: require('@/assets/icons/nuoctraicay.png'),
  },
  {
    id: 5,
    name: 'Kem',
    icon: require('@/assets/icons/ice-cream-cup.png'),
  },
  {
    id: 6,
    name: 'Bán ngọt',
    icon: require('@/assets/icons/cake.png'),
  },
];
export const restaurantData = [
  // tra sua
  {
    id: 1,
    name: 'Trà sữa chuyền thống',
    money: '49.000 đ',
    categories: [1],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
    menu: [
      {
        menuId: 1,
        name: 'Trà sữa chuyền thống',
        photo: images.caphe19k,
        description:
          'Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.',
        calories: 49,
        price: 49,
      },
    ],
  },
  {
    id: 2,
    name: 'Trà sữa chuyền thống',
    money: '49.000 đ',
    categories: [1],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
    menu: [
      {
        menuId: 1,
        name: 'Trà sữa chuyền thống',
        photo: images.caphe19k,
        description:
          'Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.',
        calories: 49,
        price: 49,
      },
    ],
  },
  {
    id: 3,
    name: 'Trà sữa chuyền thống',
    money: '49.000 đ',
    categories: [1],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
    menu: [
      {
        menuId: 1,
        name: 'Trà sữa chuyền thống',
        photo: images.caphe19k,
        description:
          'Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.',
        calories: 49,
        price: 49,
      },
    ],
  },
  {
    id: 4,
    name: 'Trà sữa chuyền thống',
    money: '49.000 đ',
    categories: [1],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
    menu: [
      {
        menuId: 1,
        name: 'Trà sữa chuyền thống',
        photo: images.caphe19k,
        description:
          'Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.',
        calories: 49,
        price: 49,
      },
    ],
  },
  {
    id: 5,
    name: 'Trà sữa chuyền thống',
    money: '49.000 đ',
    categories: [1],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
    menu: [
      {
        menuId: 1,
        name: 'Trà sữa chuyền thống',
        photo: images.caphe19k,
        description:
          'Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.',
        calories: 49,
        price: 49,
      },
    ],
  },
  {
    id: 6,
    name: 'Trà sữa chuyền thống',
    money: '49.000 đ',
    categories: [1],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
    menu: [
      {
        menuId: 1,
        name: 'Quán xà bì chưởng',
        photo: require('@/assets/imagesdata/cafe-den-da.png'),
        description: '133/11B Hoà Hưng, Quận 10, Thành Phố Hồ Chí Minh',
        calories: 50,
        price: 50,
      },
    ],
  },
  // cafe
  {
    id: 7,
    name: 'Cafe Đen Đá',
    money: '49.000 đ',
    categories: [2],
    priceRating: affordable,
    photo: require('@/assets/imagesdata/cafe-den-da.png'),
    price: 49,
    menu: [
      {
        menuId: 1,
        name: 'Cafe Đen Đá',
        photo: require('@/assets/imagesdata/cafe-den-da.png'),
        description:
          'Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.',
        calories: 49,
        price: 49,
      },
    ],
  },
  {
    id: 8,
    name: 'Cafe Sữa Đá',
    money: '49.000 đ',
    categories: [2],
    priceRating: affordable,
    photo: require('@/assets/imagesdata/cafe-sua-da.png'),
    price: 49,
    menu: [
      {
        menuId: 1,
        name: 'Cafe Đen Đá',
        photo: require('@/assets/imagesdata/cafe-sua-da.png'),
        description:
          'Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.',
        calories: 49,
        price: 49,
      },
    ],
  },
  {
    id: 9,
    name: 'Cafe Sữa Nóng',
    money: '49.000 đ',
    categories: [2],
    priceRating: affordable,
    photo: require('@/assets/imagesdata/cafe-sua-nong.png'),
    price: 49,
  },
  {
    id: 10,
    name: 'Bạc Sỉu',
    money: '49.000 đ',
    categories: [2],
    priceRating: affordable,
    photo: require('@/assets/imagesdata/bac-siu-da.png'),
    price: 49,
  },
  // Nước trái cây
  {
    id: 11,
    name: 'Trà Lài Thơm',
    money: '49.000 đ',
    categories: [3],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
  },
  {
    id: 12,
    name: 'Trà Oolong thơm',
    money: '49.000 đ',
    categories: [3],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
  },
  // cake
  {
    id: 13,
    name: 'Bánh Socola',
    money: '49.000 đ',
    categories: [6],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
  },
  {
    id: 14,
    name: 'Mochi Kem',
    money: '49.000 đ',
    categories: [6],
    priceRating: affordable,
    photo: images.caphe19k,
    price: 49,
  },
];

const initialCurrentLocation = {
  streetName: 'Món ngon',
  gps: {
    latitude: 1.5496614931250685,
    longitude: 110.36381866919922,
  },
};
// price rating
export const affordable = 1;

const datass = {categoryData, restaurantData, initialCurrentLocation};

export default datass;
