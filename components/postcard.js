import Link from "next/link";
import {
  Button,
  Container,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const PostCard = ({ title, date, description, image, slug, alt }) => (
  <Container textAlign="left" maxW="3xl" py={4} my={4} mb={5}>
    <Link legacyBehavior href="/[slug]" as={`/${slug}`} passHref>
      <Image src={image} mb="25px" width="100%" cursor="pointer" alt={alt} />
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
    {/* <Text fontSize="12px" mb="10px">
          {tags}{" "}
        </Text> */}
    <Link legacyBehavior href="/[slug]" as={`/${slug}`} passHref>
      <Button
        padding="30px 40px"
        borderRadius="8px"
        bg={useColorModeValue("#5044fc", "#82fab2")}
        color={useColorModeValue("#fff", "#221F1F")}
        _hover="none"
      >
        <a mt={2} mb={1} fontSize="sm">
          Read more
        </a>
      </Button>
    </Link>
  </Container>
);

export default PostCard;
