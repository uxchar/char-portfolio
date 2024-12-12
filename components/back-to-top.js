import { Button } from "@chakra-ui/react";
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

  return (
    <Button
      onClick={scrollToTop}
      position="fixed"
      bottom="20px"
      right="20px"
      size="md"
      bg="#F8434C"
      color="#F5F5F1"
      display={showBackToTopButton ? "block" : "none"}
      _hover="none"
    >
      Back to Top
    </Button>
  );
};

export default BackToTopButton;
