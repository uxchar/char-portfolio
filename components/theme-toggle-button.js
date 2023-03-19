import { AnimatePresence, motion } from "framer-motion";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  const handleClick = (event) => {
    event.stopPropagation();
    toggleColorMode();
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Flex
          direction="row"
          alignItems="center"
          marginTop="18px"
          marginLeft="flex-end"
        >
          <IconButton
            position="fixed"
            background="none"
            borderRadius="30px"
            aria-label="Toggle theme"
            align="center"
            marginLeft="auto"
            justify="flex-end"
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={handleClick}
          />
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
