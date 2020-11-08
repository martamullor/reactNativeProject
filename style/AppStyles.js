import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const AppStyles = {
  color: {
    red: '#e3142b',
    black: '#212721',
    grey: '#808080',
    white: 'white',
    darkGrey: '#c5bbaa',
    whiteGrey: '#d7ccc4',
  },
  marginApp: {
    marginHorizontal: 30,
  },
};

export const GeneralStyles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    backgroundColor: AppStyles.color.white,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  backButton: {
    paddingTop: 5,
    paddingBottom: 25,
  },
  contentCentered: {
    display: 'flex',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    maxHeight: '100%',
    marginHorizontal: AppStyles.marginApp.marginHorizontal,
  },
  contentAligned: {
    display: 'flex',
    flex: 1,
    alignContent: 'center',
    maxHeight: '100%',
    marginHorizontal: AppStyles.marginApp.marginHorizontal,
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
  linkStyle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    padding: 15,
    color: AppStyles.color.red,
  },
  inputTextStyle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    borderWidth: 1,
    borderColor: AppStyles.color.black,
    padding: 10,
  },
  labelStyle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#3d3935',
    padding: 5,
  },
  buttonStyle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    paddingVertical: 15,
  },
  inputBoldTextStyle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 15,
    borderWidth: 1,
    borderColor: AppStyles.color.whiteGrey,
    padding: 18,
    borderRadius: 10,
  },
  titleStyle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 30,
    color: AppStyles.color.black,
  },
  textStyle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    lineHeight: 27.5,
    color: AppStyles.color.black,
  },
  textStylesBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    lineHeight: 27.5,
    color: AppStyles.color.black,
  },
});
