import Link from "next/link";
import {
  Button,
  Container,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const PostCard = ({ title, date, description, image, slug }) => (
  <Link legacyBehavior href="/[slug]" as={`/${slug}`} passHref>
    <Button
      h="auto"
      width="auto"
      bg="none"
      opacity=".9"
      color={useColorModeValue("#221F1F", "#f0e7db")}
    >
      <Container textAlign="left" maxW="3xl" py={4} my={4} mb={5}>
        <Image src={image} mb="25px" width="100%" />
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
          <a color="#3182ce" mt={2} mb={1} fontSize="sm">
            Read more
          </a>
        </Link>
      </Container>
    </Button>
  </Link>
);

export default PostCard;
