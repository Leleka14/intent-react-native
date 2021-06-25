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
      backgroundColor: '#FFFFFF',
      paddingTop: insets.top,
    },
    header: {
      fontSize: '25@s',
      textAlign: 'center',
    },

    list: {
      marginTop: '15@s',
    },
  })
