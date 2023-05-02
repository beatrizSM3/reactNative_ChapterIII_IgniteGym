import {Input as NBInput, IInputProps} from "native-base";

interface InputProps extends IInputProps{
    invalid?: boolean;
}

export function Input({...rest}: IInputProps) {

  
    return(
        <NBInput
        
        bg="gray.700"
        color="gray.300"
        borderWidth={0}
        fontSize={{base: "xs", md: "sm"}}
        fontFamily="body"
        mb={4}
        _focus={{
            borderColor: "green.500",
            borderWidth: 1,
            bg: "gray.700",
        }}
        
        {...rest}
        />

    )

}