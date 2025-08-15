import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

interface BaseAppProps {
  children?: React.ReactNode;
}

export const BaseApp = ({ children }: BaseAppProps) => {
  return <Box>{children ? children : <Outlet />}</Box>;
};
