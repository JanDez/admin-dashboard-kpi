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
	FiCalendar,
	FiChevronDown,
	FiChevronUp,
	FiPlus,
	FiSearch,
	FiBookOpen,
	FiKey,
	FiLayers,
	FiUsers,
} from "react-icons/fi"
import MyChart from '../components/MyChart'

export default function Dashboard() {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    return (
		<Flex
			h={[null, null, "100vh"]}
			maxW='2000px'
			flexDir={["column", "column", "row"]}
			overflow='hidden'>
			{/* Column 1 */}
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
									<Icon as={FiHome} fontSize='2xl' />
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
									<Text>Home</Text>
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
									<Icon
										as={FiLayers}
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
									href='/dashboard/canales'>
									<Text className='active'>Canales</Text>
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
						</Flex>
					</Flex>
					<Flex flexDir='column' alignItems='center' mb={10} mt={5}>
						<Link
							_hover={{ textDecor: "none" }}
							display={["flex", "flex", "none", "flex", "flex"]}
							href='/dashboard/profile'>
							<Icon as={FiUsers} fontSize='4xl' />
						</Link>
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
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-between'
					width='86%'>
					<Heading fontWeight='normal' mb={4} letterSpacing='tight'>
						Canales
					</Heading>
					
				</Box>
				<Text color='gray' fontSize='sm'>
					Validaciones Solicitadas
				</Text>
				<Flex flexDir='column'>
					<Flex overflow='auto'>
						<Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='gray'>
									<Th>Canal</Th>
									<Th>Alias</Th>
									<Th>ID</Th>
									<Th>Status</Th>
									<Th>Acción</Th>
									<Th>Llave</Th>
									<Th>Operación</Th>
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
													Canal 1
												</Heading>
												{/* <Text
													fontSize='sm'
													color='gray'>
													Timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>Alias</Td>
									<Td>1212ffsf</Td>
									<Td>Aprobado</Td>
									<Td>
										<Button colorScheme='yellow'>
											Editar
										</Button>
									</Td>
									
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Canal 2
												</Heading>
												{/* <Text
													fontSize='sm'
													color='gray'>
													timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>Alias</Td>
									<Td>5431223</Td>
									<Td>Denegado</Td>
									<Td>
										<Button colorScheme='yellow'>
											Editar
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Canal 3
												</Heading>
												{/* <Text
													fontSize='sm'
													color='gray'>
													timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>Alias</Td>
									<Td>54553qwqw</Td>
									<Td>Denegado</Td>
									<Td>
										<Button colorScheme='yellow'>
											Editar
										</Button>
									</Td>
								</Tr>
								{display == "show" && (
									<>
										<Tr>
											<Td>
												<Flex align='center'>
													<Flex flexDir='column'>
														<Heading
															size='sm'
															letterSpacing='tight'>
															Canal 4
														</Heading>
														{/* <Text
															fontSize='sm'
															color='gray'>
															timestamp
														</Text> */}
													</Flex>
												</Flex>
											</Td>
											<Td>Alias</Td>
											<Td>7675434jj</Td>
											<Td>Aprobado</Td>
											<Td>
												<Button colorScheme='yellow'>
													Editar
												</Button>
											</Td>
										</Tr>
										<Tr>
											<Td>
												<Flex align='center'>
													<Flex flexDir='column'>
														<Heading
															size='sm'
															letterSpacing='tight'>
															Canal 5
														</Heading>
														{/* <Text
															fontSize='sm'
															color='gray'>
															timestamp
														</Text> */}
													</Flex>
												</Flex>
											</Td>
											<Td>Alias</Td>
											<Td>2121k4k4k4</Td>
											<Td>Aprobado</Td>
											<Td>
												<Button colorScheme='yellow'>
													Editar
												</Button>
											</Td>
										</Tr>
										<Tr>
											<Td>
												<Flex align='center'>
													<Flex flexDir='column'>
														<Heading
															size='sm'
															letterSpacing='tight'>
															Canal 6
														</Heading>
														{/* <Text
															fontSize='sm'
															color='gray'>
															timestamp
														</Text> */}
													</Flex>
												</Flex>
											</Td>
											<Td>Alias</Td>
											<Td>1123123fdf</Td>
											<Td>Aprobado</Td>
											<Td>
												<Button colorScheme='yellow'>
													Editar
												</Button>
											</Td>
										</Tr>
									</>
								)}
							</Tbody>
						</Table>
					</Flex>
					<Flex align='center'>
						<Divider />
						<IconButton
							icon={
								display == "show" ? (
									<FiChevronUp />
								) : (
									<FiChevronDown />
								)
							}
							onClick={() => {
								if (display == "show") {
									changeDisplay("none")
								} else {
									changeDisplay("show")
								}
							}}
						/>
						<Divider />
					</Flex>
				</Flex>
				{/* <Heading fontWeight='normal' mb={4} letterSpacing='tight'>
					Validadores
				</Heading>
				<Text color='gray' fontSize='sm'>
					Validaciones Aprobadas
				</Text> */}
				<Flex flexDir='column'>
					<Flex overflow='auto'>
						{/* <Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='gray'>
									<Th>Canal</Th>
									<Th>ID</Th>
									<Th>Status</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>
										<Flex align='center'>
											<Avatar
												size='sm'
												mr={2}
												src='amazon.jpeg'
											/>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Canal 1
												</Heading>
												<Text
													fontSize='sm'
													color='gray'>
													Timestamp
												</Text>
											</Flex>
										</Flex>
									</Td>
									<Td>1212342334efdf3rr</Td>
									<Td>Aprobado</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Avatar
												size='sm'
												mr={2}
												src='amazon.jpeg'
											/>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Canal 2
												</Heading>
												<Text
													fontSize='sm'
													color='gray'>
													timestamp
												</Text>
											</Flex>
										</Flex>
									</Td>
									<Td>23123wr544</Td>
									<Td>Denegado</Td>
								</Tr>
								<Tr>
									<Td>
										<Flex align='center'>
											<Avatar
												size='sm'
												mr={2}
												src='amazon.jpeg'
											/>
											<Flex flexDir='column'>
												<Heading
													size='sm'
													letterSpacing='tight'>
													Canal 3
												</Heading>
												<Text
													fontSize='sm'
													color='gray'>
													timestamp
												</Text>
											</Flex>
										</Flex>
									</Td>
									<Td>1231434dfge66</Td>
									<Td>Denegado</Td>
								</Tr>
								{display == "show" && (
									<>
										<Tr>
											<Td>
												<Flex align='center'>
													<Avatar
														size='sm'
														mr={2}
														src='amazon.jpeg'
													/>
													<Flex flexDir='column'>
														<Heading
															size='sm'
															letterSpacing='tight'>
															Canal 4
														</Heading>
														<Text
															fontSize='sm'
															color='gray'>
															timestamp
														</Text>
													</Flex>
												</Flex>
											</Td>
											<Td>567645345ffdfsd</Td>
											<Td>Aprobado</Td>
										</Tr>
										<Tr>
											<Td>
												<Flex align='center'>
													<Avatar
														size='sm'
														mr={2}
														src='amazon.jpeg'
													/>
													<Flex flexDir='column'>
														<Heading
															size='sm'
															letterSpacing='tight'>
															Canal 5
														</Heading>
														<Text
															fontSize='sm'
															color='gray'>
															timestamp
														</Text>
													</Flex>
												</Flex>
											</Td>
											<Td>131432sdfsd</Td>
											<Td>Aprobado</Td>
										</Tr>
										<Tr>
											<Td>
												<Flex align='center'>
													<Avatar
														size='sm'
														mr={2}
														src='amazon.jpeg'
													/>
													<Flex flexDir='column'>
														<Heading
															size='sm'
															letterSpacing='tight'>
															Canal 6
														</Heading>
														<Text
															fontSize='sm'
															color='gray'>
															timestamp
														</Text>
													</Flex>
												</Flex>
											</Td>
											<Td>1234234dfd</Td>
											<Td>Aprobado</Td>
										</Tr>
									</>
								)}
							</Tbody>
						</Table> */}
					</Flex>
					{/* <Flex align='center'>
						<Divider />
						<IconButton
							icon={
								display == "show" ? (
									<FiChevronUp />
								) : (
									<FiChevronDown />
								)
							}
							onClick={() => {
								if (display == "show") {
									changeDisplay("none")
								} else {
									changeDisplay("show")
								}
							}}
						/>
						<Divider />
					</Flex> */}
				</Flex>
			</Flex>
			</Flex>
		</Flex>
	)
}