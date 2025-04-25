import { Box, Container, Flex, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Flex direction="column" minH="100vh">
            <Box as="header" bg="brand.600" color="white" py={4}>
                <Container maxW="container.xl">
                    <Flex justify="space-between" align="center">
                        <ChakraLink as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
                            三体
                        </ChakraLink>
                        <Flex gap={6}>
                            <ChakraLink as={RouterLink} to="/characters">
                                人物志
                            </ChakraLink>
                            <ChakraLink as={RouterLink} to="/timeline">
                                时间线
                            </ChakraLink>
                            <ChakraLink as={RouterLink} to="/gallery">
                                图库
                            </ChakraLink>
                        </Flex>
                    </Flex>
                </Container>
            </Box>

            <Box as="main" flex="1" py={8}>
                <Container maxW="container.xl">{children}</Container>
            </Box>

            <Box as="footer" bg="gray.100" py={4}>
                <Container maxW="container.xl">
                    <Text textAlign="center" color="gray.600">
                        © {new Date().getFullYear()} 三体网站. All rights reserved.
                    </Text>
                </Container>
            </Box>
        </Flex>
    )
}

export default Layout 