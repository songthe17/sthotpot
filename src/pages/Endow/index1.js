/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '@/constants';
import styles from './styles';

const DonHang = ({navigation}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('@/assets/icons/back.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
            }}>
            <Text style={{...FONTS.h3, fontWeight: 'bold', ...COLORS.black}}>
              Lịch sử đơn
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.TextHeader}>Đơn đã đặt</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.touchable}>
          <Image
            source={require('@/assets/images/xabichuong.png')}
            style={styles.image_menu}
          />
          <View style={styles.view_bottom}>
            <Text style={styles.TextHeader}>Xà bì chưởng</Text>
            <Text style={styles.text_name}>4 người , 18h 10/04/2023</Text>
            <Text style={styles.text_name}>200.000 VNĐ</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.touchable}>
          <Image
            source={require('@/assets/images/xabichuong.png')}
            style={styles.image_menu}
          />
          <View style={styles.view_bottom}>
            <Text style={styles.TextHeader}>Xà bì chưởng</Text>
            <Text style={styles.text_name}>2 người , 19h 12/04/2023</Text>
            <Text style={styles.text_name}>200.000 VNĐ</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.touchable}>
          <Image
            source={require('@/assets/images/lotteria.png')}
            style={styles.image_menu}
          />
          <View style={styles.view_bottom}>
            <Text style={styles.TextHeader}>Lotteria</Text>
            <Text style={styles.text_name}>4 người , 18h 10/04/2023</Text>
            <Text style={styles.text_name}>200.000 VNĐ</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.touchable}>
          <Image
            source={require('@/assets/images/xabichuong.png')}
            style={styles.image_menu}
          />
          <View style={styles.view_bottom}>
            <Text style={styles.TextHeader}>Xà bì chưởng</Text>
            <Text style={styles.text_name}>4 người , 18h 10/04/2023</Text>
            <Text style={styles.text_name}>200.000 VNĐ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DonHang;
