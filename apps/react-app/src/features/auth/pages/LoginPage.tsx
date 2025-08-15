import { Text } from "@chakra-ui/react";
import LoginForm from "../component/LoginForm";

export function LoginPage() {
  return (
    <div>
      <Text textAlign={"center"} textStyle={"small-regular"}>
        This is the login page
      </Text>
      <LoginForm />
    </div>
  );
}
