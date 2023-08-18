/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import styles from './styles';

const Setting2 = ({navigation}) => {
  function TienIch() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Tiện ích</Text>
        <View style={styles.viewcon}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.touchtientich}
              onPress={() => navigation.navigate('DonHang')}>
              <Image
                source={require('@/assets/icons/files.png')}
                style={styles.icons2}
              />
              <Text style={styles.textcon1}>Lịch sử đơn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchtientich1}>
              <Image
                source={require('@/assets/icons/rules.png')}
                style={styles.icons2}
              />
              <Text style={styles.textcon1}>Điều khoản</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.touchtientich2}>
            <Image
              source={require('@/assets/icons/musical-note.png')}
              style={styles.icons2}
            />
            <Text style={styles.textcon1}>Nhạc đang phát</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function Hotro() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Hỗ trợ</Text>
        <View style={styles.viewcon}>
          <TouchableOpacity style={styles.touch}>
            <Image
              source={require('@/assets/icons/star.png')}
              style={styles.icons}
            />
            <Text style={styles.textcon}>Đánh giá</Text>
            <Text style={styles.textcon2}> {'>'} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
            <Image
              source={require('@/assets/icons/chat.png')}
              style={styles.icons}
            />
            <Text style={styles.textcon}>Liên hệ và góp ý</Text>
            <Text style={styles.textcon2}> {'>'} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function TaiKhoan() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Tài khoản</Text>
        <View style={styles.viewcon}>
          <TouchableOpacity style={styles.touch}>
            <Image
              source={require('@/assets/icons/account.png')}
              style={styles.icons}
            />
            <Text style={styles.textcon}>Thông tin tài khoản</Text>
            <Text style={styles.textcon2}> {'>'} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
            <Image
              source={require('@/assets/icons/save.png')}
              style={styles.icons}
            />
            <Text style={styles.textcon}>Địa chỉ đã lưu</Text>
            <Text style={styles.textcon2}> {'>'} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
            <Image
              source={require('@/assets/icons/setting.png')}
              style={styles.icons}
            />
            <Text style={styles.textcon}>Cài đặt</Text>
            <Text style={styles.textcon2}> {'>'} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate('SignUp2')}>
            <Image
              source={require('@/assets/icons/log-in.png')}
              style={styles.icons}
            />
            <Text style={styles.textcon}>Đăng xuất</Text>
            <Text style={styles.textcon2}> {'>'} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {TienIch()}
      {Hotro()}
      {TaiKhoan()}
    </SafeAreaView>
  );
};

export default Setting2;
