/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {icons, COLORS, SIZES, FONTS, images} from '@/constants';
import styles from '../SignUp/styles';

const OderDelivery = (
  navigation,
  inputStyle,
  prependComponent,
  secureTextEntry,
  autoCapitalize = 'none',
  errorMsg = '',
) => {
  function MainHeader() {
    return (
      <View>
        {/*Header */}
        <View style={{flexDirection: 'row', marginBottom: SIZES.padding}} />
        <View
          style={{
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={require('@/assets/images/The-Coffee-House-Logo.png')}
              resizeMode="contain"
              style={styles.Image}
            />
          </View>
          {/*Tile & Sub */}
          <View
            style={{
              marginTop: SIZES.padding,
            }}>
            <Text
              style={{
                textAlign: 'center',
                ...FONTS.h2,
                color: COLORS.primary,
              }}>
              Bạn quên mật khẩu
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.darkgray,
                marginTop: SIZES.base,
                ...FONTS.body3,
              }}>
              Chào mừng đến với
            </Text>
          </View>
          {/* Content  */}
          <View
            style={{
              paddingVertical: SIZES.padding * 2,
              marginLeft: SIZES.padding,
              marginRight: SIZES.padding,
            }}>
            {/*Email */}
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: COLORS.black, ...FONTS.body4}}>
                  Email & Số điện thoại
                </Text>
                <Text style={{color: COLORS.red, ...FONTS.body4}}>
                  {errorMsg}
                </Text>
              </View>
              {/*Input */}
              <View
                style={{
                  flexDirection: 'row',
                  height: 55,
                  paddingHorizontal: SIZES.padding,
                  marginTop: SIZES.base,
                  borderRadius: SIZES.base,
                  backgroundColor: COLORS.lightGray2,
                }}>
                {prependComponent}
                <TextInput
                  style={{flex: 1, ...inputStyle}}
                  placeholder="Nhập Email & Số điện thoại"
                  secureTextEntry={secureTextEntry}
                  keyboardType="email-address"
                  autoCapitalize={autoCapitalize}
                  autoCompleteType="email"
                />
              </View>
            </View>
          </View>
          {/*Button */}
          <View
            style={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: 55,
                width: '95%',
                alignItems: 'center',
                marginTop: SIZES.padding,
                borderRadius: 5,
                backgroundColor: COLORS.primary,
              }}>
              {/* onPress={() => navigation.goBack()}> */}
              <Text
                style={{
                  marginTop: 15,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                Xác nhận
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return <SafeAreaView style={styles.container}>{MainHeader()}</SafeAreaView>;
};
export default OderDelivery;
