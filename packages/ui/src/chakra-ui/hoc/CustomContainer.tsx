// components/PageSection.tsx
import { Container, type ContainerProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface PageSectionProps extends ContainerProps {
  children: ReactNode;
}

export function PageSection({ children, ...props }: PageSectionProps) {
  return (
    <Container
      px={{ base: "3.5", md: "5.375rem" }}
      pr={{ base: "3.5", md: "4.375rem" }}
      pt={{ base: "3rem", md: "9.375rem" }}
      pb={{ base: "3rem", md: 0 }}
      // maxH={{ base: 'fit-content' }}
      maxW="container.xl"
      {...props}
    >
      {children}
    </Container>
  );
}
