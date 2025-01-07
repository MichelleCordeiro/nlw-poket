import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100]
  },
  image: {
    gap: 12,
    padding: 24,
    paddingBottom: 100
  },
  content: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300]
  },
  name: {
    backgroundColor: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 16
  },
  description: {
    backgroundColor: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 16
  },
  footer: {
    backgroundColor: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 16
  },
  tickets: {
    backgroundColor: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 16
  }
})
