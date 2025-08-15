// components/PageSection.tsx
import { Container, type ContainerProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface PageSectionProps extends ContainerProps {
  children: ReactNode;
}

export function UserDashboardContainer({
  children,
  ...props
}: PageSectionProps) {
  return (
    <Container
      px={{ base: "1rem", md: "2rem" }}
      maxW="container.xl"
      mx={"auto"}
      {...props}
    >
      {children}
    </Container>
  );
}
