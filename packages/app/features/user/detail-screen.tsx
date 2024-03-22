import { TextLink } from 'solito/link'
import { Text } from '@repo/app/design/typography'
import { View } from '@repo/app/design/view'
import { useParams } from 'solito/navigation'

type Params = { id: string;}
export function UserDetailScreen() {
  const {id } = useParams<Params>()

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
