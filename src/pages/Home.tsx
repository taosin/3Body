import { Box, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'

const Home = () => {
    return (
        <VStack spacing={8} align="stretch">
            <Box textAlign="center" py={10}>
                <Heading as="h1" size="2xl" mb={4}>
                    三体
                </Heading>
                <Text fontSize="xl" color="gray.600">
                    刘慈欣科幻小说系列
                </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
                    <Heading as="h2" size="lg" mb={4}>
                        三体
                    </Heading>
                    <Text>
                        地球文明向宇宙发出广播，引发三体文明的注意。三体文明派出智子锁死地球科技，并派出舰队入侵地球。
                    </Text>
                </Box>

                <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
                    <Heading as="h2" size="lg" mb={4}>
                        黑暗森林
                    </Heading>
                    <Text>
                        人类发现宇宙文明之间的黑暗森林法则，为了生存，必须隐藏自己，消灭其他文明。
                    </Text>
                </Box>

                <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
                    <Heading as="h2" size="lg" mb={4}>
                        死神永生
                    </Heading>
                    <Text>
                        人类文明面临终极抉择，是选择生存还是尊严？是选择黑暗还是光明？
                    </Text>
                </Box>
            </SimpleGrid>
        </VStack>
    )
}

export default Home 