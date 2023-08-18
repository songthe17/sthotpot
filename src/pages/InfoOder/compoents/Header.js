import React from 'react';
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
import styles from '../styles';

const Header = () => {
  return (
    <View style={styles.view_header}>
      <Text style={styles.textheader}>Đặt hàng</Text>
      <View style={styles.view_text_input}>
        <TextInput
          style={styles.textinput}
          placeholder="Tìm kiếm đồ uống"
          keyboardType="text"
        />
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('@/assets/icons/search.png')}
            style={styles.icon_sreach}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('@/assets/icons/like.png')}
            style={styles.icon_sreach}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
