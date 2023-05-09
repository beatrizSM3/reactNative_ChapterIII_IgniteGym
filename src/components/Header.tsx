import { VStack,HStack, Heading, Text, IconButton, Icon } from "native-base";
import { MaterialIcons} from '@expo/vector-icons'
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";


type HeaderProps = {
    userName: string
}

export function Header({userName}: HeaderProps) {
    return (
        <HStack bg="gray.600" pt={{base: "8", md: "16"}} pb="5" px="8" alignItems="center" justifyContent="space-between">
            <HStack>
                <UserPhoto size={12} userPhoto={"https://github.com/NitroCaffeine.png"}/>
                <VStack ml="4">
                    <Text color="gray.100" fontSize={{base: "sm", md: "md"}}>Olá</Text>
                    <Heading color="gray.100" fontSize={{base: "sm", md: "md"}} fontFamily="heading">{userName}</Heading>
                </VStack>
            </HStack>
            <TouchableOpacity>
                <Icon
                as={MaterialIcons}
                name="logout"
                size={6}
                color="gray.200"
                />
            </TouchableOpacity>
        </HStack>

    )
}