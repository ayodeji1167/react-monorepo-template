import { Box, Button, Input, Stack } from "@chakra-ui/react";

export default function LoginForm() {
  return (
    <Box shadow={"md"} p={"1rem"} rounded={"sm"} maxW={"40rem"} mx={"auto"}>
      <form>
        <Stack gap={"1rem"}>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Box>
  );
}
