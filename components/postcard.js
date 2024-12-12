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
  Tag,
} from "@chakra-ui/react";

const PostCard = ({ title, description, image, slug, alt, tags }) => {
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
        mb={10}
      >
        <Image objectFit="cover" maxW="100%" h="50%" src={image} alt={alt} />

        <Flex wrap="wrap" p={4} gap={2}>
          {tags.map((tag, index) => (
            <Tag key={index} size="md" textColor="#f0e7dc" borderRadius="full">
              {tag}
            </Tag>
          ))}
        </Flex>
        <Stack p={4}>
          <Heading
            as="h2"
            size="lg"
            mt={2}
            textColor="#f0e7db"
            fontWeight="extrabold"
            mb={2}
          >
            {title}
          </Heading>
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
              my={6}
              borderRadius="lg"
              bg="#F8434C"
              color="#221f1f"
              _hover={{ opacity: 0.7 }}
              width={isMobile ? "100%" : "auto"} // Adjust the width for mobile and desktop
              fontSize={isMobile ? "sm" : "md"} // Adjust the font size for mobile and desktop
              px={isMobile ? 2 : 8} // Adjust the padding for mobile and desktop
              py={8}
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
