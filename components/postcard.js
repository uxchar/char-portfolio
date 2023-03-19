import Link from "next/link";
import { Button, Container, Heading, Text } from "@chakra-ui/react";

const PostCard = ({ title, date, description, slug }) => (
  <Link legacyBehavior href="/[slug]" as={`/${slug}`} passHref>
    <Button h="auto" width="auto" bg="#ffd" opacity="0.9" color="#110110">
      <Container textAlign="left" maxW="3xl" borderRadius="6px" py={4} my={4}>
        <Heading as="h2" size="md" fontWeight="extrabold" mb={4}>
          {title}
        </Heading>
        <Text opacity=".4" fontSize="sm" mb={2}>
          {date}
        </Text>
        <Text
          fontFamily="Erode"
          fontSize="sm"
          whiteSpace="normal"
          wordWrap="break-word"
          mt={2}
          mb={4}
        >
          {description}
        </Text>

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
