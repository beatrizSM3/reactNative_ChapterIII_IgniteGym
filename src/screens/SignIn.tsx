import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}> 
    <VStack flex={1} bg="gray.700" px={6}>
      <Image
        source={BackgroundImg}
        alt="Background"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={{ base: "10", md: "24" }}>
        <LogoSvg />
        <Text color="gray.50" fontSize={{ base: "xs", md: "sm" }}>
          A Treine sua mente e seu corpo
        </Text>
      </Center>
      <Center>
        <Heading
          color="gray.100"
          fontSize={{ base: "sm", md: "lg", xl: "lg" }}
          mb="6"
          fontFamily="heading"
        >
          Acesse sua conta
        </Heading>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />
        <Button title="Acessar" />
      </Center>

      <Center mt={{base: 24, md: 32}}>
        <Text color="gray.50" fontSize={{ base: "xs", md: "sm" }} mb={3}>
          Ainda não tem acesso ?
        </Text>
        <Button title="Criar conta" variant="outline" />
      </Center>
    </VStack>
</ScrollView>
  );
}
