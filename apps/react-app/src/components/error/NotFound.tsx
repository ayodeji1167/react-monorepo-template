import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      css={{
        "--header-height": "104px",
        "--content-height": "calc(100dvh - var(--header-height))",
      }}
    >
      <header>
        <Center minH="90dvh">
          <VStack gap="6">
            {/* <Image src={Logo} className="App-logo" alt="logo" /> */}
            <Logo />
            <Heading size="4xl">404. Page not found</Heading>
            <Text>The page you are looking for does not exist.</Text>
            <Button w="full" onClick={() => navigate("/")}>
              Take me Home
            </Button>
          </VStack>
        </Center>
      </header>
    </Box>
  );
}
