/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  categoryData,
  restaurantData,
  initialCurrentLocation,
} from './constants';
import {icons, images, SIZES, COLORS, FONTS} from '@/constants';
import styles from './styles';

const Home2 = ({navigation}) => {
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
  function header() {
    return (
      <View style={styles.viewhead}>
        <TouchableOpacity style={styles.avatarbutton}>
          <Image
            source={require('@/assets/images/avatar-1.jpg')}
            resizeMode="contain"
            style={styles.imageHeader1}
          />
          <Text style={styles.textheader}>Hello</Text>
        </TouchableOpacity>
        <View style={styles.viewhead_icon}>
          <TouchableOpacity style={styles.buttoncoupon}>
            <Image
              source={require('@/assets/icons/coupon.png')}
              resizeMode="contain"
              style={styles.iconHeader1}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewhead_icon2}>
          <TouchableOpacity style={styles.buttoncoupon}>
            <Image
              source={require('@/assets/icons/notification.png')}
              resizeMode="contain"
              style={styles.iconHeader1}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function MainLayout() {
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
          <View>
            <Text
              style={{
                marginTop: SIZES.padding,
                color:
                  selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
                ...FONTS.body5,
                fontSize: SIZES.body3 * 1,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={styles.textheader1}>Khám phá thêm</Text>

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
      <View style={styles.tagView}>
        <TouchableOpacity style={styles.box}>
          {/* Image */}
          <View
            style={{
              marginBottom: SIZES.padding,
            }}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={styles.Image1}
            />
          </View>
          <Text style={styles.textimage}>{item.name}</Text>
          <View style={styles.view_list}>
            {/* Rating */}
            <Image
              source={require('@/assets/icons/calendar.png')}
              style={styles.image_icon}
            />
            <Text style={{...FONTS.body3}}>{item.rating}</Text>
            <View>
              {item.categories.map(categoryId => {
                return (
                  <View key={categoryId}>
                    <Text style={{...FONTS.h3, color: COLORS.darkgray}}> </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );

    return (
      <FlatList
        numColumns={2}
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.renderRestaurantList}
      />
    );
  }
  return (
    <SafeAreaView style={styles.safeareaview}>
      {header()}
      {MainLayout()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};
export default Home2;
