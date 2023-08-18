/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, COLORS, SIZES, FONTS, images} from '@/constants';
const Settings = ({navigation}) => {
  return (
    <View>
      {/*Profile */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: SIZES.radius,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('OderDelivery')}>
        <Image
          source={images.avatar_2}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            borderRadius: SIZES.radius,
          }}
        />
        <View style={{marginLeft: SIZES.radius}}>
          <Text style={{color: COLORS.primary, ...FONTS.h2}}>BySongThe</Text>
          <Text style={{color: COLORS.black, ...FONTS.body4}}>
            View your profile
          </Text>
        </View>
      </TouchableOpacity>
      {/*list setting */}
      <View style={{flex: 1, marginTop: SIZES.padding}}>
        {/*hOME */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 50,
            marginBottom: SIZES.base,
            alignItems: 'center',
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
          }}>
          <Image
            source={icons.house}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.black,
              ...FONTS.h4,
            }}>
            Trang chủ
          </Text>
        </TouchableOpacity>
        {/*Notification */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 50,
            marginBottom: SIZES.base,
            alignItems: 'center',
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
          }}>
          <Image
            source={icons.notification}
            style={{
              width: 40,
              height: 40,
              borderRadius: SIZES.radius,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.black,
              ...FONTS.h4,
            }}>
            Thông báo
          </Text>
        </TouchableOpacity>
        {/*fire */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 50,
            marginBottom: SIZES.base,
            alignItems: 'center',
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
          }}>
          <Image
            source={icons.fire}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.black,
              ...FONTS.h4,
            }}>
            Yêu thích
          </Text>
        </TouchableOpacity>
        {/*Line */}
        <View
          style={{
            width: '80%',
            height: 1,
            marginVertical: SIZES.radius,
            marginLeft: SIZES.radius,
            backgroundColor: COLORS.black,
          }}
        />
        {/*Location */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 50,
            marginBottom: SIZES.base,
            alignItems: 'center',
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
          }}>
          <Image
            source={icons.location2}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.black,
              ...FONTS.h4,
            }}>
            Địa điểm
          </Text>
        </TouchableOpacity>
        {/*Friend */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 50,
            marginBottom: SIZES.base,
            alignItems: 'center',
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
          }}>
          <Image
            source={icons.friend}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.black,
              ...FONTS.h4,
            }}>
            Mời bạn bè
          </Text>
        </TouchableOpacity>
        {/*help */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 50,
            marginBottom: SIZES.base,
            alignItems: 'center',
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
          }}>
          <Image
            source={icons.help}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.black,
              ...FONTS.h4,
            }}>
            Hỗ trợ
          </Text>
        </TouchableOpacity>
        {/*Logout */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
            marginBottom: SIZES.padding,
          }}
          onPress={() => navigation.navigate('OderDelivery')}>
          <Image
            source={icons.checkout}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.black,
              ...FONTS.h4,
            }}>
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
export default Settings;
