/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  FilterModal,
  Animated,
} from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import {COLORS, SIZES, FONTS, icons} from '@/constants/';
import styles from '../styles';

const QuickOrder = props => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [orderItems, setOrderItems] = React.useState([]);
  const scrollX = new Animated.Value(0);

  const {item} = props;
  console.log(item);
  //sum
  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter(a => a.menuId == menuId);
    if (action == '+') {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }
      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }
      setOrderItems(orderList);
    }
  }
  function getOrderQty(menuId) {
    let orderItem = orderItems.filter(a => a.menuId == menuId);
    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }
    return 0;
  }
  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);
    return total;
  }
  return (
    <BottomSheet
      ref={ref => {
        this.bottomSheet = ref;
      }}
      height={500}
      duration={250}
      // closeOnDragDown={true}
      // closeOnPressMask={false}
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}>
      <View style={styles.View_all}>
        <View style={styles.View_header_bts}>
          <Text style={styles.textheader}>{item.name}</Text>
        </View>
        <View style={styles.view_size}>
          <Text style={styles.text_header_size}>Size</Text>
          <TouchableOpacity
            style={[
              styles.list_bottom,
              selectedButtonIndex === 0 && styles.list_bottom_selected,
            ]}
            onPress={() => {
              setSelectedButtonIndex(0);
              setSelectedSize('Vừa');
            }}>
            <Image
              source={
                selectedButtonIndex === 0 ? icons.fire_selected : icons.fire
              }
              style={{
                width: 20,
                height: 20,
                marginRight: 5,
                tintColor:
                  selectedButtonIndex === 0 ? COLORS.primary : COLORS.secondary,
              }}
            />
            <Text style={styles.text_size}>Vừa</Text>
            <Text style={styles.text_size_money}>{item.price}.000đ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.list_bottom,
              selectedButtonIndex === 1 && styles.list_bottom_selected,
            ]}
            onPress={() => {
              setSelectedButtonIndex(1);
              setSelectedSize('Lớn');
            }}>
            <Image
              source={
                selectedButtonIndex === 1 ? icons.fire_selected : icons.fire
              }
              style={{
                width: 20,
                height: 20,
                marginRight: 5,
                tintColor:
                  selectedButtonIndex === 1 ? COLORS.primary : COLORS.secondary,
              }}
            />
            <Text style={styles.text_size}>Lớn</Text>
            <Text style={styles.text_size_money}>{item.price}.000đ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view_size1}>
          <Text style={styles.text_header_size}>Topping</Text>
          <TouchableOpacity
            style={styles.list_bottom}
            onPress={() => setSelectedSize('Vừa')}>
            <Text style={styles.text_size}>Vừa</Text>
            <Text style={styles.text_size_money}>{item.price}.000đ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list_bottom}
            onPress={() => setSelectedSize('Lớn')}>
            <Text style={styles.text_size}>Lớn</Text>
            <Text style={styles.text_size_money}>{item.price}.000đ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view_count}>
          <Animated.ScrollView
            style={styles.view_animated}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}>
            <TouchableOpacity
              style={styles.touch_count_minus}
              onPress={() => editOrder('-', item.menuId, item.price)}>
              <Text>-</Text>
            </TouchableOpacity>
            <View style={styles.text_count}>
              <Text style={{...FONTS.h2}}>{getOrderQty(item.menuId)}</Text>
            </View>
            <TouchableOpacity
              style={styles.touch_count_max}
              onPress={() => editOrder('+', item.menuId, item.price)}>
              <Text>+</Text>
            </TouchableOpacity>
          </Animated.ScrollView>
          <TouchableOpacity style={styles.touch_oder}>
            <Text style={{...FONTS.h3, color: 'white'}}>{sumOrder()}.000đ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default QuickOrder;
