/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  FilterModal,
} from 'react-native';
import styles from './styles';
import {
  categoryData,
  restaurantData,
  initialCurrentLocation,
} from './constants';
import {icons, images, SIZES, COLORS, FONTS} from '@/constants';

import Header from './compoents/Header';
import QuickOrder from './compoents/QuickOrder';

const Oders = ({navigation}) => {
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );
  const [itemQuickorder, setitemQuickorder] = useState({});
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
  function MenuList() {
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            marginLeft: 5,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={styles.button_icons}
            onPress={() => onSelectCategory(item)}>
            <View>
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
              <Text style={styles.text_menu}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={{padding: SIZES.padding * 1}}>
        <Text style={styles.textheader}>Đặt đồ nè</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    );
  }

  const quickOrderAction = item => {
    setitemQuickorder(item);
    this.bottomSheet.open();
  };

  function MenuListData() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={styles.list_menu}
        onPress={() =>
          navigation.navigate('Restaurant', {
            item,
            currentLocation,
          })
        }>
        <View>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={styles.image_menu}
          />
        </View>
        <View style={styles.view_bottom}>
          <Text style={styles.textheader}>{item.name}</Text>
          <Text style={styles.text_money}>{item.money}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.tocuh_bottom}
            onPress={() => quickOrderAction(item)}>
            <Text style={styles.icon_bottom}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
    return (
      <View>
        <Text style={styles.textheader}>Menu</Text>
        <FlatList
          data={restaurants}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingRight: 30,
            paddingBottom: 30,
          }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.safeareaview}>
      {<Header />}
      {MenuList()}
      {MenuListData()}
      <QuickOrder item={itemQuickorder} />
    </SafeAreaView>
  );
};

export default Oders;
