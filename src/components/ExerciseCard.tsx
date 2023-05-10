import { HStack, Text, VStack, Image, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'


type ExerciseCardProps = TouchableOpacityProps & {}


export function ExerciseCard({...rest}: ExerciseCardProps) {
    return (
       
            <TouchableOpacity  {...rest} >
              
                    <HStack   bg="gray.500" rounded="md" pl={2} py={2} pr={4}  alignItems="center" justifyContent="space-between">
                        <Image
                        source={{uri: 'https://www.dicasdetreino.com.br/wp-content/uploads/2017/07/Tipos-de-Pegada-Treino-de-Costas.jpg'}}
                        alt="Exercício"
                        rounded="md"
                        w="16"
                        h="16"
                        />
                
                            <VStack justifyContent="center">
                                <Text fontFamily="heading" color="white" textTransform="capitalize" fontSize="sm">Puxada frontal</Text>
                                <Text fontFamily="body" color="gray.200" fontSize="xs" numberOfLines={2}> 3 séries x 12 repetições</Text>
                            </VStack>
                
                        <Icon
                        as={Entypo}
                        name="chevron-thin-right"
                        size={{base: 4, md: 6}}
                        color="gray.200"
                        />
                    </HStack>
                
            </TouchableOpacity>
       
    )
}