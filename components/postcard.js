import Link from "next/link";
import {
  Button,
  Heading,
  Text,
  Image,
  Stack,
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
        borderRadius="xl"
        borderColor="#f0e7dc"
        borderWidth="3px"
        borderStyle="solid"
        backgroundColor=" #221F1F"
      >
        <Image objectFit="cover" maxW="100%" h="50%" src={image} alt={alt} />

        <Stack p={4}>
          <Heading
            as="h2"
            size="md"
            mt={2}
            textColor="#f0e7db"
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
            textColor="#f0e7db"
            mb={2}
          >
            {description}
          </Text>

          <Link href={`/${slug}`} passHref>
            <Button
              mt={4}
              mb={4}
              borderRadius="lg"
              bg="#82fab2"
              color="#221F1F"
              _hover={{ opacity: 0.7 }}
              width={isMobile ? "100%" : "auto"} // Adjust the width for mobile and desktop
              fontSize={isMobile ? "sm" : "md"} // Adjust the font size for mobile and desktop
              px={isMobile ? 2 : 4} // Adjust the padding for mobile and desktop
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
