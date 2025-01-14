import { useEffect, useState } from 'react'
import { Alert, View, Modal } from 'react-native'
import { router, useLocalSearchParams, Redirect } from 'expo-router'

import { Loading } from '@/components/loading'
import { Cover } from '@/components/market/cover'
import { Coupon } from '@/components/market/coupon'
import { Details, PropsDetails } from '@/components/market/details'
import { Button } from '@/components/button'

import { api } from '@/services/api'

type DataProps = PropsDetails & {
  cover: string
}

export default function Market() {
  const [data, setData] = useState<DataProps>()
  const [coupon, setCoupon] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)

  const params = useLocalSearchParams<{ id: string}>()

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível carregar os dados', [
        {
          text: 'OK',
          onPress: () => router.back()
        }
      ])
    }
  }

  async function handleOpenCamera() {
    try {
      setIsVisibleCameraModal(true)
    } catch (error) {
      console.log(error)
      Alert.alert('Câmera', 'Não foi possível utilizar a câmera')
    }
  }

  useEffect(() => {
    fetchMarket()
  },[params.id])

  if(isLoading) {
    return <Loading />
  }

  if(!data) {
    return <Redirect href='/home' />
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={data.cover} />
      <Details data={data} />
      {coupon && <Coupon code={coupon} />}

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <View style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
        <Button onPress={() => setIsVisibleCameraModal(false)}>
          <Button.Title>Voltar</Button.Title>
        </Button>
        </View>
      </Modal>
    </View>
  )
}
