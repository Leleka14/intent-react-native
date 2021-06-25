import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../CountryCard/styles'

interface IProps {
  item: any
  onPress(item: any): void
}

const CountryCard: React.FC<IProps> = ({ item, onPress }) => {
  const s = styles

  return (
    <View style={s.container}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => onPress(item.name)}>
        <View style={s.icon}>{item.icon}</View>

        <Text style={s.title}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CountryCard
