import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";

export const RouteError = () => {
  const error: any = useRouteError();

  useEffect(() => {
    if (error) {
      const errorMessage =
        error.statusText?.toLowerCase() || error.message?.toLowerCase();
      const reloadMessage = "failed to fetch dynamically imported module";

      if (errorMessage?.includes(reloadMessage)) {
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <Box h="100vh" w="full" overflow="hidden" position="relative" bg={"white"}>
      <Box
        position={"absolute"}
        display={{
          base: "hidden",
          md: "block",
        }}
        bottom="-32"
        left="-32"
        w="96"
        h="96"
      >
        <svg
          viewBox="0 0 200 200"
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#35337a"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        h="full"
        position="relative"
      >
        <VStack textAlign={"center"} gap={4} p="4">
          <Text fontSize={"2xl"} color={"gray.600"} fontWeight={"600"} mb="4">
            Oops! ☹️
          </Text>
          <Text fontSize="lg" fontWeight={"600"}>
            Sorry, an unexpected error has occurred.
          </Text>
          <Heading fontSize="md" fontWeight={"600"} color={"error.500"}>
            {error.statusText || error.message}
          </Heading>
          <div>
            <Button
              variant={"outline"}
              size={"md"}
              borderRadius={"none"}
              color={"white"}
              bg={"primary !important"}
              // asChild
            >
              <Link to={"/"}></Link>
              Return Home
            </Button>
          </div>
        </VStack>
      </Flex>
    </Box>
  );
};
