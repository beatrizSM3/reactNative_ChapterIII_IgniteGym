import { Image, IImageProps } from "native-base";
import UserPhotoDefault from "@assets/userPhotoDefault.png"

interface UserPhotoProps extends IImageProps {
    size: number;
    userPhoto: string ;
}

export function UserPhoto({size, userPhoto, ...rest}: UserPhotoProps) {
    

    return (
        <Image
        source={{uri: userPhoto}}
        fallbackSource={UserPhotoDefault} // fallbackSource é a imagem que vai aparecer caso a imagem não seja encontrada
        alt="Foto do usuário"
        rounded="full"
        borderWidth="2"
        borderColor="gray.300"
        w={size}
        h={size}
        {...rest}
        />
    )
}