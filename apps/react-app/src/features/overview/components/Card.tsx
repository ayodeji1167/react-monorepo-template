import { Card as ChakraCard, Flex, Text } from "@chakra-ui/react";

interface CardProps {
  title: string;
  description: string;
  stats: string;
  // icon: React.ReactNode;
  color: string;
  other?: string;
}

export default function Card({
  title,
  description,
  stats,
  // icon,
  color,
}: CardProps) {
  return (
    <ChakraCard.Root
      bg="red.300"
      p="30px"
      borderRadius="10px"
      flex={1}
      border="none"
      flexDir="column"
    >
      <Flex justifyContent="space-between" width="100%">
        <Flex flexDirection="column">
          <Text fontWeight={400} fontSize="14px" color="gray.400" mb="5px">
            {title}
          </Text>
          <Text fontWeight={600} fontSize="32px" color="gray.500" mb="16px">
            {stats}
          </Text>
        </Flex>
        <Flex
          minW="40px"
          minH="40px"
          boxSize="40px"
          bg={color}
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
        >
          Icon
        </Flex>
      </Flex>
      <Flex>
        <Text fontWeight={400} fontSize="12px" color="gray.200">
          {description}
        </Text>
      </Flex>
    </ChakraCard.Root>
  );
}
