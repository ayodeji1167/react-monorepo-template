import { Box, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Text>Top Nav</Text>

      <Box>{children}</Box>
    </div>
  );
}
