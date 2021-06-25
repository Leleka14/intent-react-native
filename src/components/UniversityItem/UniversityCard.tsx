import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IUniversity } from '../../types/universities'
import { styles } from './styles'

interface IProps {
  item: IUniversity
  onPress(item: string): void
}

const UniversityCard: React.FC<IProps> = ({ item, onPress }) => {
  const s = styles
  const link = item.web_pages && item.web_pages.length > 0 ? item.web_pages[0] : ''
  return (
    <View style={s.container}>
      <Text style={s.title}>{item.name}</Text>
      {link ? (
        <TouchableOpacity style={s.button} onPress={() => onPress(link)}>
          <Text>Open Website</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

export default UniversityCard
