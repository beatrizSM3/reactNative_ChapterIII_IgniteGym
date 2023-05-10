import { Text, Pressable, IPressableProps } from "native-base";

type GroupProps = IPressableProps & {
  groupName: string;
  isActive?: boolean;
 
};

export function Group({ groupName, isActive = false, ...rest }: GroupProps) {


  return (
    <Pressable
      px="6"
      py="3"
      mr="3"
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden" 
      isPressed={isActive}
      _pressed={{
        borderWidth: 1,
        borderColor: "green.500",
        color: "green.500",
      }}
      
      {...rest}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        fontFamily="heading"
        textTransform="uppercase"
        fontSize="xs"
      >
        {groupName}
      </Text>
    </Pressable>
  );
}
