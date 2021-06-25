import { ScaledSheet } from 'react-native-size-matters'

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: '5@s',
    paddingVertical: '15@s',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
  },
  title: {
    fontSize: '15@s',
    textAlign: 'center',
  },
  button: {
    marginTop: '20@s',
    padding: '5@s',
    borderColor: 'blue',
    borderWidth: '1.5@s',
    borderRadius: '10@s',
  },
})
