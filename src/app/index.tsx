import { View } from 'react-native'
import { IconPlus } from '@tabler/icons-react-native'

import { Welcome } from '@/components/welcome'
import { Steps } from '@/components/steps'
import { Button } from '@/components/button'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        gap: 40
      }}
    >
      <Welcome />
      <Steps />

      <Button isLoading={false}>
        {/* <Button style={{ backgroundColor: 'orange' }}> */}
        <Button.Title>Começar</Button.Title>
        {/* <Button.Icon icon={IconPlus} /> */}
      </Button>
    </View>
  )
}
