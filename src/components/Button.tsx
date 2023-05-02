import {Button as NBButton, IButtonProps, Text} from 'native-base';
import { color } from 'native-base/lib/typescript/theme/styled-system';

interface ButtonProps extends IButtonProps{
    title: string;
    variant?: "outline" | "solid";
}


export function Button({title, variant="solid", ...rest}: ButtonProps){
    return(
        <NBButton
        p={4}
        alignItems="center"
        justifyContent="center"
        rounded="sm"
        w="full"
        h={{base: "12", md: "14"}}
        bg={variant ==="outline"? "transparent" :"green.700"}
        borderWidth={variant ==="outline"? 1 : 0}
        borderColor="green.500"
        _pressed={{
            bg: variant==="outline"? "green.700": "green.500"
            
            
        }}
       

        {...rest}
        
        >
            <Text
            color={variant==="outline"? "green.500":"white"}
            fontSize={{base: "xs", md: "sm"}}
            fontFamily="heading"
            >
                {title} 
                    
            </Text>
        </NBButton>
    )
}

