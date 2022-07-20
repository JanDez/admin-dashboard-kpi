import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"
import MyChart from '../components/MyChart'

export default function Dashboard() {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    h={[null, null, "100vh"]}
                    justifyContent="space-between"
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >
                        <Heading
                            mt={50}
                            mb={[25, 50, 100]}
                            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                          Logo
                        </Heading>
                        <Flex
                            flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center"
                        >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text className="active">Home</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiPieChart} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Credit</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiDollarSign} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Item 1</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiBox} fontSize="2xl" /></Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Item 2</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="avatar-1.jpg" />
                        <Text textAlign="center">Leonel Messi</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* Column 2 */}
            <Flex
                w={["100%", "100%", "60%", "60%", "55%"]}
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading
                    fontWeight="normal"
                    mb={4}
                    letterSpacing="tight"
                >
                    Bienvenido, <Flex display="inline-flex" fontWeight="bold">Leo</Flex>
                </Heading>
                <Text color="gray" fontSize="sm">Balance</Text>
                <Text fontWeight="bold" fontSize="2xl">$5,750.20</Text>
                <MyChart />
                <Flex justifyContent="space-between" mt={8}>
                    <Flex align="flex-end">
                        <Heading as="h2" size="lg" letterSpacing="tight">Transacciones</Heading>
                        <Text fontSize="small" color="gray" ml={4}>Fecha</Text>
                    </Flex>
                    <IconButton icon={<FiCalendar />} />
                </Flex>
                <Flex flexDir="column">
                    <Flex overflow="auto">
                        <Table variant="unstyled" mt={4}>
                            <Thead>
                                <Tr color="gray">
                                    <Th>Transacción</Th>
                                    <Th>Categoria</Th>
                                    <Th isNumeric>Info</Th>
                                    <Th isNumeric>Info</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="amazon.jpeg" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                                                <Text fontSize="sm" color="gray">Timestamp</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Info</Td>
                                    <Td isNumeric>545454</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">554545</Text></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="starbucks.png" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Microsoft</Heading>
                                                <Text fontSize="sm" color="gray">timestamp</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Tesla</Td>
                                    <Td isNumeric>6565465</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">4654646</Text></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="youtube.png" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">YouTube</Heading>
                                                <Text fontSize="sm" color="gray">timestamp</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Bank of America</Td>
                                    <Td isNumeric>+$4</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">66448454</Text></Td>
                                </Tr>
                                {display == 'show' &&
                                    <>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar size="sm" mr={2} src="amazon.jpeg" />
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                                                        <Text fontSize="sm" color="gray">timestamp</Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Info</Td>
                                            <Td isNumeric>565</Td>
                                            <Td isNumeric><Text fontWeight="bold" display="inline-table">545454</Text></Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar size="sm" mr={2} src="starbucks.png" />
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">Telefónica</Heading>
                                                        <Text fontSize="sm" color="gray">timestamp</Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Otro request</Td>
                                            <Td isNumeric>23234324</Td>
                                            <Td isNumeric><Text fontWeight="bold" display="inline-table">34324</Text></Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar size="sm" mr={2} src="youtube.png" />
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">Otro request</Heading>
                                                        <Text fontSize="sm" color="gray">timestamp</Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Request</Td>
                                            <Td isNumeric>2e1232</Td>
                                            <Td isNumeric><Text fontWeight="bold" display="inline-table">543534</Text></Td>
                                        </Tr>
                                    </>
                                }
                            </Tbody>
                        </Table>
                    </Flex>
                    <Flex align="center">
                        <Divider />
                        <IconButton
                            icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />}
                            onClick={() => {
                                if (display == 'show') {
                                    changeDisplay('none')
                                } else {
                                    changeDisplay('show')
                                }
                            }}
                        />
                        <Divider />
                    </Flex>
                </Flex>
            </Flex>

            {/* Column 3 */}
            
    )
}