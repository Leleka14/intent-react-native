import React from 'react'
import { Text, View, ActivityIndicator, TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'
import { SearchIcon, ErrorIcon } from '../../assets/icons/Icons'
import { Transitioning } from 'react-native-reanimated'
import {} from 'react-native'

interface IProps {
  searchValue: string
  onSearch(text: string): void
  displaySearchIcon: boolean
  isTyping: boolean
  searchIconRef: any
  transitionIcon: any
  error: string | null
  universities: any
}

const Country: React.FC<IProps> = ({
  searchValue,
  onSearch,
  displaySearchIcon,
  isTyping,
  searchIconRef,
  transitionIcon,
  error,
  universities,
}) => {
  const insets = useSafeAreaInsets()
  const s = styles(insets)

  return (
    <View style={s.container}>
      <Text style={s.header}>Country</Text>
      <Transitioning.View ref={searchIconRef} transition={transitionIcon} style={s.searchWrapper}>
        {displaySearchIcon ? <SearchIcon /> : null}
        <TextInput
          placeholder={'Find University'}
          style={s.searchInput}
          onChangeText={text => onSearch(text)}
          defaultValue={searchValue}
          placeholderTextColor={'#828282'}
        />
      </Transitioning.View>
      {isTyping ? (
        <View style={s.spinnerWrapper}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : error || universities.length === 0 ? (
        <View style={s.errorWrapper}>
          <ErrorIcon />
          <Text style={s.errorText}>Ooops, nothing was found,{'\n'}please try again later...</Text>
        </View>
      ) : null}
    </View>
  )
}

export default Country
