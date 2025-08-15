"use client";
import { type ReactNode } from "react";
import { system } from "@repo/theme/chakra-ui";

import { ChakraProvider } from "@chakra-ui/react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <div>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </div>
  );
}
