import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'

interface IProps {}

const Country: React.FC<IProps> = ({}) => {
  const insets = useSafeAreaInsets()
  const s = styles(insets)

  return (
    <View style={s.container}>
      <Text style={s.header}>Country</Text>
    </View>
  )
}

export default Country
