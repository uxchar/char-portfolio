import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setShowBackToTopButton(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const elementColor = useColorModeValue("#5044fc", "#82fab2");
  const buttonColorText = useColorModeValue("#fff", "#221F1F");
  return (
    <Button
      onClick={scrollToTop}
      position="fixed"
      bottom="20px"
      right="20px"
      size="md"
      bg={elementColor}
      color={buttonColorText}
      display={showBackToTopButton ? "block" : "none"}
      _hover="none"
    >
      Back to Top
    </Button>
  );
};

export default BackToTopButton;
