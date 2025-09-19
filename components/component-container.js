import { useColorMode } from "@chakra-ui/react";

const ComponentContainer = ({ children }) => {
  const { colorMode } = useColorMode();
  const boxBgColor = colorMode === "light" ? "#f5f1da" : "#202040";

  const containerStyles = {
    width: "100%",
    minHeight: "calc(100vh - 72px)",
    backgroundColor: boxBgColor,
  };

  return <div style={containerStyles}>{children}</div>;
};

export default ComponentContainer;
