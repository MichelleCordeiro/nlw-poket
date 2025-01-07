import { View } from 'react-native'

import { Place, PlaceProps } from '../place'

import { colors } from '@/styles/colors'
import { s } from './styles'

type Props = {
  data: PlaceProps[]
}

export function Places({ data }: Props) {
  return (
    <View style={s.container}>
    </View>
  )
}
