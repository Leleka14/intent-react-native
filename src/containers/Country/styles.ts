import { ScaledSheet } from 'react-native-size-matters'

interface IProps {
  top: number
  left: number
  right: number
  bottom: number
}

export default (insets: IProps) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#FFFFFF',
      paddingTop: insets.top,
    },
    headerWrapper: {
      paddingVertical: '20@vs',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backIconWrapper: {
      position: 'absolute',
      left: '15@s',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: '25@s',
      textAlign: 'center',
    },
    searchWrapper: {
      marginTop: '10@s',
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      flexDirection: 'row',
      borderColor: '#DFDFDF',
      borderWidth: '1@s',
      marginHorizontal: '10@s',
      padding: '10@s',
      borderRadius: '10@s',
      fontSize: '15@s',
    },
    searchInput: {
      height: '100%',
      marginLeft: '10@s',
      width: '100%',
    },
    sortButton: {
      marginTop: '10@s',
      marginHorizontal: '15@s',
    },
    spinnerWrapper: {
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorWrapper: {
      height: '50%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: '20@s',
    },
    errorText: {
      fontSize: '15@s',
    },
    list: {
      margin: '15@s',
    },
    separator: {
      height: '1@s',
      backgroundColor: '#828282',
      marginHorizontal: '5@s',
    },
  })
