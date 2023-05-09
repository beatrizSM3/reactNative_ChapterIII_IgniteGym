import { Header } from "@components/Header";
import { Center, Text, VStack } from "native-base";


export function Home() {

    return (
        <VStack flex={1}>
            <Header userName="Beatriz"/>
        </VStack>
    )
}