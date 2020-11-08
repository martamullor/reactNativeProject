import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const AppStyles = {
  color: {
    red: '#e3142b',
    black: '#212721',
    grey: '#3d3935',
    white: 'white',
    darkGrey: '#c5bbaa',
    whiteGrey: '#d7ccc4',
  },
  paddingApp: {
    paddingHorizontal: hp('3%'),
  },
};

export const GeneralStyles = StyleSheet.create({
  contentAligned: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: AppStyles.paddingApp.paddingHorizontal,
    backgroundColor: AppStyles.color.white,
  },
});

export const ButtonStyles = StyleSheet.create({
  overlineButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: wp('40%'),
    borderColor: 'black',
    borderWidth: wp('0.3%'),
    borderRadius: wp('50%'),
  },
  linkButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: wp('40%'),
  },
});

export const TextStyles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: hp('1.8%'),
    color: AppStyles.color.grey,
    padding: hp('0.8%'),
  },
  buttonStyle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: hp('1.8%'),
    paddingVertical: hp('2%'),
  },
  inputBoldTextStyle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: hp('1.6%'),
    borderWidth: hp('0.1%'),
    borderColor: AppStyles.color.whiteGrey,
    padding: hp('2%'),
    borderRadius: hp('1.5%'),
  },
  textStyle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: hp('1.6%'),
    lineHeight: hp('1.6%'),
    color: AppStyles.color.black,
  },
  textStylesBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: hp('1.6%'),
    lineHeight: hp('1.6%'),
    color: AppStyles.color.black,
  },
});
