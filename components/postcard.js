import Link from "next/link";
import {
  Button,
  Heading,
  Text,
  Image,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  Card,
  Flex,
} from "@chakra-ui/react";

const PostCard = ({ title, date, description, image, slug, alt }) => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Flex direction="column" mb={4}>
      <Card
        overflow="hidden"
        borderRadius="2xl"
        borderColor={useColorModeValue("#221F1F", "#f0e7db")}
        backgroundColor={useColorModeValue("#f0e7db", " #221F1F")}
      >
        <Image objectFit="cover" maxW="100%" h="50%" src={image} alt={alt} />

        <Stack p={4}>
          <Heading
            as="h2"
            size="md"
            mt={2}
            textColor={useColorModeValue("#221F1F", "#f0e7db")}
            fontWeight="extrabold"
            mb={2}
          >
            {title}
          </Heading>
          <Text opacity=".4" fontSize="sm" mb={1}>
            {date}
          </Text>
          <Text
            fontSize="sm"
            whiteSpace="normal"
            wordWrap="break-word"
            textColor={useColorModeValue("#221F1F", "#f0e7db")}
            mb={2}
          >
            {description}
          </Text>

          <Link href={`/${slug}`} passHref>
            <Button
              mt={2}
              borderRadius="lg"
              bg={useColorModeValue("#5044fc", "#82fab2")}
              color={useColorModeValue("#fff", "#221F1F")}
              _hover={{ opacity: 0.7 }}
              width={isMobile && "100%"}
              fontSize="sm"
              px={2}
              py={1}
              textAlign="center"
              aria-label={`Read more about ${title}`} // Add an ARIA label for accessibility
              role="link" // Indicate that this is a link
            >
              Read more
            </Button>
          </Link>
        </Stack>
      </Card>
    </Flex>
  );
};

export default PostCard;
