import {
	Flex,
	Heading,
	Text,
	Icon,
	Link,
} from "@chakra-ui/react"
import { FiHome, FiBookOpen, FiLayers, FiUser } from "react-icons/fi"
export default function SideBar() {
    return (
        <Flex
            flexDir='column'
            h={[null, null, "100vh"]}
            justifyContent='space-between'>
            <Flex flexDir='column' as='nav'>
                <Heading
                    mt={50}
                    mb={[25, 50, 100]}
                    fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
                    alignSelf='center'
                    letterSpacing='tight'>
                    Logo
                </Heading>
                <Flex
                    flexDir={["row", "row", "column", "column", "column"]}
                    align={[
                        "center",
                        "center",
                        "center",
                        "flex-start",
                        "flex-start",
                    ]}
                    wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                    justifyContent='center'>
                    <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                        <Link display={["none", "none", "flex", "flex", "flex"]}>
                            <Icon
                                as={FiHome}
                                fontSize='2xl'
                                className='active-icon'
                            />
                        </Link>
                        <Link
                            _hover={{ textDecor: "none" }}
                            display={["flex", "flex", "none", "flex", "flex"]}
                            href='/dashboard/home'>
                            <Text className='active'>Home</Text>
                        </Link>
                    </Flex>
                    <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                        <Link
                            display={["none", "none", "flex", "flex", "flex"]}
                            href='/dashboard/canales'>
                            <Icon as={FiLayers} fontSize='2xl' />
                        </Link>
                        <Link
                            _hover={{ textDecor: "none" }}
                            display={["flex", "flex", "none", "flex", "flex"]}
                            href='/dashboard/canales'>
                            <Text>Canales</Text>
                        </Link>
                    </Flex>
                    <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                        <Link display={["none", "none", "flex", "flex", "flex"]}>
                            <Icon as={FiBookOpen} fontSize='2xl' />
                        </Link>
                        <Link
                            _hover={{ textDecor: "none" }}
                            display={["flex", "flex", "none", "flex", "flex"]}
                            href='/dashboard/bitacora'>
                            <Text>Bitacora</Text>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDir='column' alignItems='center' mb={10} mt={5}>
                <Icon as={FiUser} fontSize='4xl' />
                <Text textAlign='center'>Alan Turing</Text>
            </Flex>
        </Flex>
    )
}
