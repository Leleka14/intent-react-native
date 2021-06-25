import React from 'react'
import Home from './Home'
import { useNavigation } from '@react-navigation/core'
import { FrenchFlag, GermanFlag, PolishFlag, SpanishFlag, UKFlag } from '../../assets/icons/Icons'

const HomeContainer: React.FC = () => {
  const navigation = useNavigation()

  const countries = [
    { name: 'Poland', icon: <PolishFlag /> },
    { name: 'Germany', icon: <GermanFlag /> },
    { name: 'France', icon: <FrenchFlag /> },
    { name: 'Spain', icon: <SpanishFlag /> },
    { name: 'United Kingdom', icon: <UKFlag /> },
  ]

  const onCountryPressed = (item: any) => {
    navigation.navigate('Country', {
      item: item,
    })
  }

  return <Home countries={countries} onCountryPressed={onCountryPressed} />
}

export default HomeContainer
