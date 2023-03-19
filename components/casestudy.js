import { Box, Heading, Text, Image, Img } from "@chakra-ui/react";
import { Layout } from "react-feather";

const CaseStudyPage = ({
  title,
  description,
  imageUrl,
  imageAlt,
  challenge,
  process,
  solution,
  result,
}) => {
  return (
    <Layout>
      <Box>
        s{" "}
        <Heading as="h1" size="xl" mb="4">
          {title}
        </Heading>
        <Text fontSize="lg" mb="8">
          {description}
        </Text>
        <Image src={imageUrl} alt={imageAlt} mb="8" />
        <Heading as="h2" size="lg" mb="4">
          Challenge
        </Heading>
        <Text mb="8">{challenge}</Text>
        <Heading as="h2" size="lg" mb="4">
          Process
        </Heading>
        <Text mb="8">{process}</Text>
        <Heading as="h2" size="lg" mb="4">
          Solution
        </Heading>
        <Text mb="8">{solution}</Text>
        <Heading as="h2" size="lg" mb="4">
          Result
        </Heading>
        <Text mb="8">{result}</Text>
      </Box>
    </Layout>
  );
};

export default CaseStudyPage;
