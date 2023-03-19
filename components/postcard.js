import Link from "next/link";
import { Container, Heading, Text } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";

const PostCard = ({ title, date, description, slug }) => (
  <Container maxW="3xl" borderRadius="6px" py={4} my={4}>
    <Heading as="h2" size="sm" fontWeight="bold" mb={4}>
      {title}
    </Heading>
    <Text color="#a0aec0" fontSize="sm" mb={2}>
      {date}
    </Text>
    <Text fontStyle="italic" fontSize="sm" mt={2} mb={4}>
      {description}
    </Text>

    <Link legacyBehavior href="/[slug]" as={`/${slug}`} passHref>
      <a color="#3182ce" mt={2} mb={1} fontSize="sm">
        Read more
      </a>
    </Link>
  </Container>
);

export default PostCard;
