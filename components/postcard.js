import Link from "next/link";
import {
  Button,
  Container,
  Heading,
  Text,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const PostCard = ({ title, date, description, image, slug, alt }) => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Container textAlign="left" maxW="3xl" py={4} my={4} mb={5}>
      <Link legacyBehavior href="/[slug]" as={`/${slug}`} passHref>
        <Image
          src={image}
          mb="25px"
          width="100%"
          cursor="pointer"
          _hover={{ opacity: 0.7 }} // set opacity to 0.7 when hovering over the button
          alt={alt}
        />
      </Link>
      <Heading as="h2" size="md" fontWeight="extrabold" mb={4}>
        {title}
      </Heading>
      <Text opacity=".4" fontSize="sm" mb={2}>
        {date}
      </Text>
      <Text
        fontFamily="Erode"
        fontSize="md"
        whiteSpace="normal"
        wordwrap="break-word"
        mt={1}
        mb={4}
      >
        {description}
      </Text>
      <Link legacyBehavior href="/[slug]" as={`/${slug}`} passHref>
        <Button
          marginTop="10px"
          marginBottom="30px"
          padding="30px 40px"
          borderRadius="8px"
          bg={useColorModeValue("#5044fc", "#82fab2")}
          color={useColorModeValue("#fff", "#221F1F")}
          _hover={{ opacity: 0.7 }} // set opacity to 0.7 when hovering over the button
          width={isMobile && "100%"} // set width to 100% on mobile screens
        >
          <a fontSize="sm">Read more</a>
        </Button>
      </Link>
    </Container>
  );
};

export default PostCard;
