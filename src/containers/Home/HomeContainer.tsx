import React from 'react'
import Home from './Home'
import { useNavigation } from '@react-navigation/core'
import { FrenchFlag, GermanFlag, PolishFlag, SpanishFlag, UKFlag } from '../../assets/icons/Icons'
import { useActions } from '../../hooks/useActions'

const HomeContainer: React.FC = () => {
  const navigation = useNavigation()
  const { fetchUniversities } = useActions()

  const countries = [
    { name: 'Poland', icon: <PolishFlag /> },
    { name: 'Germany', icon: <GermanFlag /> },
    { name: 'France', icon: <FrenchFlag /> },
    { name: 'Spain', icon: <SpanishFlag /> },
    { name: 'United Kingdom', icon: <UKFlag /> },
  ]

  const onCountryPressed = (name: string) => {
    fetchUniversities(name)
    console.log('hererr')

    navigation.navigate('Country', {
      name: name,
    })
  }

  return <Home countries={countries} onCountryPressed={onCountryPressed} />
}

export default HomeContainer
