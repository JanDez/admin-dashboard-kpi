import React, { useState } from "react"
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
	Select,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react"
import {
	FiHome,
	FiCalendar,
	FiChevronDown,
	FiChevronUp,
	FiPlus,
	FiSearch,
	FiBookOpen,
	FiKey,
	FiLayers,
	FiUsers,
	FiUser,
} from "react-icons/fi"
import MyChart  from "../../components/MyChart"
export default function Home() {
	const [display, changeDisplay] = useState("hide")
	const [value, changeValue] = useState(1)
	return (
		<Flex
			h={[null, null, "100vh"]}
			maxW='2000px'
			flexDir={["column", "column", "row"]}
			overflow='hidden'>
			{/* Column 1 */}
			<Flex
				w={["100%", "100%", "10%", "15%", "15%"]}
				flexDir='column'
				alignItems='center'
				backgroundColor='#020202'
				color='#fff'>
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
							flexDir={[
								"row",
								"row",
								"column",
								"column",
								"column",
							]}
							align={[
								"center",
								"center",
								"center",
								"flex-start",
								"flex-start",
							]}
							wrap={[
								"wrap",
								"wrap",
								"nowrap",
								"nowrap",
								"nowrap",
							]}
							justifyContent='center'>
							<Flex
								className='sidebar-items'
								mr={[2, 6, 0, 0, 0]}>
								<Link
									display={[
										"none",
										"none",
										"flex",
										"flex",
										"flex",
									]}>
									<Icon
										as={FiHome}
										fontSize='2xl'
										className='active-icon'
									/>
								</Link>
								<Link
									_hover={{ textDecor: "none" }}
									display={[
										"flex",
										"flex",
										"none",
										"flex",
										"flex",
									]}
									href='/dashboard'>
									<Text className='active'>Home</Text>
								</Link>
							</Flex>
							<Flex
								className='sidebar-items'
								mr={[2, 6, 0, 0, 0]}>
								<Link
									display={[
										"none",
										"none",
										"flex",
										"flex",
										"flex",
									]}
									href='/dashboard/canales'>
									<Icon as={FiLayers} fontSize='2xl' />
								</Link>
								<Link
									_hover={{ textDecor: "none" }}
									display={[
										"flex",
										"flex",
										"none",
										"flex",
										"flex",
									]}
									href='/dashboard/canales'>
									<Text>Canales</Text>
								</Link>
							</Flex>
							<Flex
								className='sidebar-items'
								mr={[2, 6, 0, 0, 0]}>
								<Link
									display={[
										"none",
										"none",
										"flex",
										"flex",
										"flex",
									]}>
									<Icon as={FiBookOpen} fontSize='2xl' />
								</Link>
								<Link
									_hover={{ textDecor: "none" }}
									display={[
										"flex",
										"flex",
										"none",
										"flex",
										"flex",
									]}
									href='/dashboard/bitacora'>
									<Text>Bitacora</Text>
								</Link>
							</Flex>
							{/* <Flex
								className='sidebar-items'
								mr={[2, 6, 0, 0, 0]}>
								<Link
									display={[
										"none",
										"none",
										"flex",
										"flex",
										"flex",
									]}>
									<Icon as={FiUsers} fontSize='2xl' />
								</Link>
								<Link
									_hover={{ textDecor: "none" }}
									display={[
										"flex",
										"flex",
										"none",
										"flex",
										"flex",
									]}
									href='/dashboard/users'>
									<Text>Usuarios</Text>
								</Link>
							</Flex> */}
						</Flex>
					</Flex>
					<Flex flexDir='column' alignItems='center' mb={10} mt={5}>
						<Icon as={FiUser} fontSize='4xl' />
						<Text textAlign='center'>Alan Turing</Text>
					</Flex>
				</Flex>
			</Flex>

			{/* Column 2 */}
			<Flex
				w={["100%", "85%"]}
				p='3%'
				flexDir='column'
				overflow='auto'
				minH='100vh'>
				<Heading fontWeight='normal' mb={4} letterSpacing='tight'>
					Bienvenido, Alan
				</Heading>
				<Text color='gray' fontSize='2xl' w='500px'>
					Estadisticas de Uso
				</Text>
				<Flex flexDir='column'>
					<Text color='gray' fontSize='sm' w='500px'>
						Validaciones
					</Text>
					<MyChart />
					<Flex>
						<Text color='gray' fontSize='2xl' w='500px' mt={8}>
							Top Canales
						</Text>
						<Text
							color='gray'
							fontSize='2xl'
							w='500px'
							mt={8}
							ml={16}>
							Top Validadores
						</Text>
					</Flex>
					<Flex>
						<Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='gray'>
									<Th>Canales</Th>
									<Th>Cantidad de Validaciones</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
								</Tr>
							</Tbody>
						</Table>

						<Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='gray'>
									<Th>Canales</Th>
									<Th>Cantidad de Validaciones</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
												
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
												{/* <Text
													fontSize='sm'
													color='gray'>
													Timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
												{/* <Text
													fontSize='sm'
													color='gray'>
													Timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
								</Tr>
							</Tbody>
						</Table>
					</Flex>

					<Text color='gray' fontSize='2xl' w='500px' mt={8}>
						Top Resultados
					</Text>
					<Flex>
						<Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='gray'>
									<Th>Canal</Th>
									<Th>Operación</Th>
									<Th>Resultado</Th>
									<Th>Cantidad</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
												{/* <Text
													fontSize='sm'
													color='gray'>
													Timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
									<Td>Info</Td>
									<Td>Info</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
												{/* <Text
													fontSize='sm'
													color='gray'>
													Timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
									<Td>Info</Td>
									<Td>Info</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Info
												</Heading>
												{/* <Text
													fontSize='sm'
													color='gray'>
													Timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>Info</Td>
									<Td>Info</Td>
									<Td>Info</Td>
								</Tr>
							</Tbody>
						</Table>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
