import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@/constants/';
export default StyleSheet.create({
  safeareaview: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  textheader: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: SIZES.body2,
    marginTop: 10,
    marginLeft: 10,
  },
  textinput: {
    borderRadius: 5,
    height: 40,
    width: 250,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  text_menu: {
    color: COLORS.black,
  },
  view_header: {
    backgroundColor: COLORS.white,
    height: 100,
  },
  view_text_input: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  icon_sreach: {
    width: 20,
    height: 20,
    marginTop: 15,
  },
  button: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  //  Menu List
  menu_list: {
    width: 50,
    height: 50,
  },
  button_icons: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding,
  },
  list_menu: {
    flexDirection: 'row',
    marginBottom: SIZES.padding * 2,
    marginTop: 10,
  },
  image_menu: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  text_money: {
    fontWeight: 'bold',
    fontSize: SIZES.body3,
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'flex-end',
    color: COLORS.black,
  },
  icon_bottom: {
    fontWeight: 'bold',
    fontSize: SIZES.body3 * 1.4,
    marginLeft: 9,
    color: COLORS.white,
  },
  view_bottom: {
    width: 200,
  },
  tocuh_bottom: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    marginLeft: 30,
    marginTop: 25,
    width: 30,
    height: 30,
  },
  list_bottom: {
    width: '80%',
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: SIZES.radius,
  },
  list_bottom_selected: {
    backgroundColor: COLORS.primary,
  },
  //BottomSheet
  View_all: {
    flex: 1,
    backgroundColor: COLORS.darkgray,
  },
  View_header_bts: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    height: 50,
  },
  view_size: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    marginBottom: 5,
  },
  view_size1: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    marginBottom: 150,
  },
  text_header_size: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: SIZES.body2,
  },
  text_size: {
    color: COLORS.black,
    fontSize: SIZES.body2,
    width: 300,
    marginLeft: 20,
  },
  text_size_money: {
    color: COLORS.black,
    fontSize: SIZES.body2,
  },
  // count
  view_count: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  view_animated: {
    width: SIZES.width,
    height: 70,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  touch_count_minus: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text_count: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch_count_max: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  touch_oder: {
    width: 200,
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
  },
});
