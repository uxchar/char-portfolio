import { chakra } from "@chakra-ui/react";

const MDXComponents = {
  p: (props) => <chakra.p fontSize="2xl" color="blue.500" {...props} />,
};

export default MDXComponents;
