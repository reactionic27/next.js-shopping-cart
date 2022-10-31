import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import type { ChildernProps } from "@/types/types";

const Layout: React.FunctionComponent<ChildernProps> = ({ children }) => {
  return (
    <Box as="section">
      <Header />
      <Box as="main">{children}</Box>
    </Box>
  );
};

export default Layout;
