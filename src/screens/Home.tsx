import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { VStack, Stack, HStack, Box, FlatList, Text } from "native-base";
import { useState } from "react";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("Grupo 1");

  const data = [
    {
      id: 1,
      name: "Grupo 1",
    },
    {
      id: 2,
      name: "Grupo 2",
    },
    {
      id: 3,
      name: "Grupo 3",
    },
    {
      id: 4,
      name: "Grupo 4",
    },
    {
      id: 5,
      name: "Grupo 5",
    },
  ];

  return (
    <VStack flex={1}>
      <HomeHeader userName="Beatriz" />

      <HStack pl="6" mt={{base: "7", md: "10"}}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Group
              groupName={item.name}
              isActive={item.name === groupSelected}
              onPress={() => setGroupSelected(item.name)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          maxH="12"
        />
      </HStack>

      <Box px="6" mt={{base: "6", md: "10"}}>
        <HStack justifyContent="space-between" alignItems="center" mb="4">
            <Text color="gray.200" fontFamily="heading">Exercícios </Text>
            <Text color="gray.200" fontFamily="body">4</Text>
        </HStack>
        <ExerciseCard/>


      </Box>
    </VStack>
  );
}
