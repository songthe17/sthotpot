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

const SignOut = ({
  navigation,
  isPassword: Boolean,
  inputStyle,
  placeholder,
  prependComponent,
  secureTextEntry,
  autoCapitalize = 'none',
  errorMsg = '',
  value,
}) => {
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  function MainHeader() {
    return (
      <View>
        {/*Header */}
        <View style={{flexDirection: 'row', marginBottom: SIZES.padding}}>
          <TouchableOpacity
            style={{
              width: 50,
              paddingLeft: SIZES.padding * 2,
              justifyContent: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={images.avatar_3}
              resizeMode="contain"
              style={{
                height: 100,
                width: 200,
              }}
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
              Vui lòng đăng ký
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
            {/*Input pass */}
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: COLORS.black, ...FONTS.body4}}>
                  Nhập mật khẩu
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
                  label="Password"
                  placeholder="Nhập Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: COLORS.black, ...FONTS.body4}}>
                  Nhập lại mật khẩu
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
                  label="Password"
                  placeholder="Nhập lại Password"
                  secureTextEntry
                  value={password2}
                  onChangeText={setPassword2}
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
              }}
              onPress={() => navigation.goBack()}>
              <Text
                style={{
                  marginTop: 15,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                Đăng ký
              </Text>
            </TouchableOpacity>
          </View>
          {/* Facebook & Google */}
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'blue',
              width: '95%',
              borderRadius: 5,
              marginLeft: SIZES.padding,
              marginTop: SIZES.padding,
            }}>
            {/*Facebook */}
            <TouchableOpacity
              style={{
                height: 55,
                alignItems: 'center',
                marginTop: SIZES.padding,
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={icons.facebook}
                  style={{width: 40, height: 40, alignItems: 'center'}}
                />
                <Text
                  style={{
                    marginLeft: 12,
                    marginTop: 12,
                    color: COLORS.white,
                    ...FONTS.body3,
                  }}>
                  Đăng ký bằng Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Google */}
          <View
            style={{
              alignItems: 'center',
              backgroundColor: COLORS.white,
              width: '95%',
              borderRadius: 5,
              marginLeft: SIZES.padding,
              marginTop: SIZES.padding,
              borderWidth: 1,
            }}>
            {/*Button */}
            <TouchableOpacity
              style={{
                height: 55,
                alignItems: 'center',
                marginTop: SIZES.padding,
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={icons.google}
                  style={{width: 40, height: 40, alignItems: 'center'}}
                />
                <Text
                  style={{
                    marginLeft: 12,
                    marginTop: 12,
                    color: COLORS.black,
                    ...FONTS.body3,
                  }}>
                  Đăng ký bằng Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return <SafeAreaView style={styles.container}>{MainHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  switchOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  switchOffContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.gray,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
export default SignOut;
