import React from 'react'
import { Text, View, ActivityIndicator, TextInput, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'
import { SearchIcon, ErrorIcon, ArrowBack } from '../../assets/icons/Icons'
import { Transitioning } from 'react-native-reanimated'
import UniversityCard from '../../components/UniversityItem/UniversityCard'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IProps {
  searchValue: string
  onSearch(text: string): void
  displaySearchIcon: boolean
  isTyping: boolean
  searchIconRef: any
  transitionIcon: any
  error: string | null
  universities: any
  isLoading: boolean
  name: string
  goBack(): void
  onLinkPressed(link: string): void
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
  isLoading,
  name,
  goBack,
  onLinkPressed,
}) => {
  const insets = useSafeAreaInsets()
  const s = styles(insets)

  const renderItem = ({ item }: any) => {
    return <UniversityCard item={item} onPress={onLinkPressed} />
  }

  const renderSeparator = () => {
    return <View style={s.separator} />
  }

  return (
    <View style={s.container}>
      <View style={s.headerWrapper}>
        <View style={s.backIconWrapper}>
          <TouchableOpacity onPress={goBack}>
            <ArrowBack />
          </TouchableOpacity>
        </View>

        <Text style={s.headerText}>{name}</Text>
        <View />
      </View>
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
      {isTyping || isLoading ? (
        <View style={s.spinnerWrapper}>
          <ActivityIndicator size={'large'} color="#000" />
        </View>
      ) : error || universities.length === 0 ? (
        <View style={s.errorWrapper}>
          <ErrorIcon />
          <Text style={s.errorText}>Ooops, nothing was found,{'\n'}please try again later...</Text>
        </View>
      ) : (
        <FlatList
          data={universities}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          style={s.list}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
    </View>
  )
}

export default Country
