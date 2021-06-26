import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { Linking } from 'react-native'
import { Transition } from 'react-native-reanimated'
import { useActions } from '../../hooks/useActions'
import useDebounce from '../../hooks/useDebounce'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { LoadingsActionTypes } from '../../types/loadings'
import { IUniversity } from '../../types/universities'
import Country from './Country'

const CountryContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const { fetchUniversities } = useActions()
  const [displaySearchIcon, setDisplaySearchIcon] = useState<boolean>(true)
  const searchIconRef: any = useRef(null)
  const debouncedSearchValue: string = useDebounce(searchValue, 800)
  const navigation = useNavigation<any>()
  const { params } = useRoute<any>()
  const name = params.name
  const [sortedList, setSortedList] = useState<Array<IUniversity>>([])
  const { universities, error, isLoading } = useTypedSelector(
    ({ universitiesReducer, loadingsReducer }) => ({
      universities: universitiesReducer?.universities ? universitiesReducer.universities : [],
      error: universitiesReducer?.universitiesError ? universitiesReducer.universitiesError : null,
      isLoading: loadingsReducer.loadings.includes(LoadingsActionTypes.LOADING_UNIVERSITY),
    }),
  )

  useEffect(() => {
    if (universities.length > 0) setSortedList(universities)
  }, [universities])

  useEffect(() => {
    if (debouncedSearchValue && searchValue) {
      fetchUniversities(name, debouncedSearchValue)
    }
    setIsTyping(false)
  }, [debouncedSearchValue])

  useEffect(() => {
    if (searchValue.length > 0) {
      setDisplaySearchIcon(false)
      if (searchIconRef) {
        searchIconRef.current.animateNextTransition()
      }
    } else {
      setDisplaySearchIcon(true)
      if (searchIconRef) {
        searchIconRef.current.animateNextTransition()
      }
    }
    setIsTyping(debouncedSearchValue !== searchValue)
  }, [searchValue])

  const onSearch = (text: string) => {
    setSearchValue(text)
  }

  const goBack = () => {
    if (navigation.canGoBack) navigation.goBack()
  }

  const onLinkPressed = (link: string) => {
    Linking.openURL(link)
  }

  const onSortPressed = (list: Array<IUniversity>) => {
    let newList = [...list]

    newList.sort((a, b) => a.name.localeCompare(b.name))
    setSortedList(newList)
  }

  const transitionIcon = <Transition.Change durationMs={200} interpolation="easeInOut" />

  return (
    <Country
      searchValue={searchValue}
      onSearch={onSearch}
      displaySearchIcon={displaySearchIcon}
      isTyping={isTyping}
      searchIconRef={searchIconRef}
      transitionIcon={transitionIcon}
      error={error}
      universities={sortedList}
      isLoading={isLoading}
      name={name}
      goBack={goBack}
      onLinkPressed={onLinkPressed}
      onSortPressed={onSortPressed}
    />
  )
}

export default CountryContainer
