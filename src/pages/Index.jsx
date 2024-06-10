import { Box, Container, VStack, Text, Heading, Flex, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={0} align="stretch">
        {/* Header */}
        <Box bg="blue.700" color="white" p={4}>
          <Heading as="h1" size="lg">Music Streaming Service</Heading>
        </Box>

        {/* Main Content */}
        <Box flex="1" p={4}>
          <Heading as="h2" size="md" mb={4}>Now Playing</Heading>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" mb={2}>Track Title - Artist Name</Text>
            <Flex align="center">
              <IconButton aria-label="Previous" icon={<FaBackward />} mr={2} />
              <IconButton aria-label="Play" icon={<FaPlay />} mr={2} />
              <IconButton aria-label="Pause" icon={<FaPause />} mr={2} />
              <IconButton aria-label="Next" icon={<FaForward />} />
            </Flex>
          </Box>
        </Box>

        {/* Footer */}
        <Box bg="blue.700" color="white" p={4} mt={4}>
          <Text textAlign="center">© 2023 Music Streaming Service. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;