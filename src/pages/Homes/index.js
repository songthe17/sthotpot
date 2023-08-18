/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '@/constants';

const Home = ({navigation}) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: 'Món ngon',
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: 'Quán ăn',
      icon: icons.hotpot,
    },
    {
      id: 2,
      name: 'Đồ ăn nhanh',
      icon: icons.hamburger,
    },
    {
      id: 3,
      name: 'Sushi',
      icon: icons.sushi,
    },
    {
      id: 4,
      name: 'Đồ uống',
      icon: icons.drink,
    },
    {
      id: 5,
      name: 'Khác',
      icon: icons.deliveryman,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: 'Cơm Xà bì chưởng ',
      rating: 4.8,
      categories: [1],
      priceRating: affordable,
      photo: images.xabichuong,
      duration: '1-10 chỗ',
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Quán xà bì chưởng',
          photo: images.xabichuong,
          description: '133/11B Hoà Hưng, Quận 10, Thành Phố Hồ Chí Minh',
          calories: 50,
          price: 50,
        },
      ],
    },
    {
      id: 2,
      name: 'Thái BBQ ',
      rating: 4.5,
      categories: [1],
      priceRating: affordable,
      photo: images.thaibbq1,
      duration: '1-7 chỗ',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Thái BBQ',
          photo: images.thaibbq1,
          description: 'Tầng 5 Vincom, phường Tân Mai, Biên Hòa, Đồng Nai',
          calories: 188,
          price: 188,
        },
      ],
    },
    {
      id: 3,
      name: 'HighLand Coffee Biên Hòa',
      rating: 4.5,
      categories: [4],
      priceRating: affordable,
      photo: images.highlands,
      duration: '1-10 chỗ',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'HighLand Coffee Biên Hòa',
          photo: images.highlands,
          description: '111/Võ Thị Sáu, phường Tân Mai, Biên Hòa, Đồng Nai',
          calories: 50,
          price: 50,
        },
      ],
    },
    {
      id: 4,
      name: 'Suối Tiên Park Thủ Đức',
      rating: 4.5,
      categories: [5],
      priceRating: affordable,
      photo: images.suoitien,
      duration: '1-7 chỗ',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Suối Tiên Park Thủ Đức',
          photo: images.suoitien,
          description: 'xa lộ Hà Nội, quận 9, thành phố Thủ Đức',
          calories: 120,
          price: 120,
        },
      ],
    },
    {
      id: 6,
      name: 'Lotteria Biên Hòa',
      rating: 4.5,
      categories: [3],
      priceRating: affordable,
      photo: images.lotteria,
      duration: '1-7 chỗ',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Lotteria Biên Hòa',
          photo: images.lotteria,
          description: '222/Võ Thị Sáu, Tân Mai, Biên Hòa, Đồng Nai',
          calories: 100,
          price: 100,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id);

    if (category.length > 0) {
      return category[0].name;
    }

    return '';
  }

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Map1')}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
            }}>
            <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: SIZES.padding,
                color:
                  selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
                ...FONTS.body5,
              }}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={{...FONTS.h2}}>Kham pha them</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{marginBottom: SIZES.padding * 2}}
        onPress={() =>
          navigation.navigate('Restaurant1', {
            item,
            currentLocation,
          })
        }>
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow,
            }}>
            <Text style={{...FONTS.h4, ...COLORS.black}}>{item.duration}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{...FONTS.body2, ...COLORS.black}}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: 'row',
          }}>
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{...FONTS.body3, ...COLORS.black}}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            {item.categories.map(categoryId => {
              return (
                <View style={{flexDirection: 'row'}} key={categoryId}>
                  <Text style={{...FONTS.body3, ...COLORS.black}}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
                </View>
              );
            })}

            {/* Price */}
            {[1].map(priceRating => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}>
                VND
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
