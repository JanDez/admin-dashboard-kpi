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
				w={[", "185%", "15%"]}
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
									]}>
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
				w={["100%", "100%", "60%", "60%", "55%"]}
				p='3%'
				flexDir='column'
				overflow='auto'
				minH='100vh'>
				<Heading fontWeight='normal' mb={4} letterSpacing='tight'>
					Bienvenido,{" "}
					<Flex display='inline-flex' fontWeight='bold'>
						Alan
					</Flex>
					<InputGroup
						bgColor='#fff'
						mb={4}
						border='none'
						borderColor='#fff'
						borderRadius='10px'
						mr={2}>
						<InputLeftElement
							pointerEvents='none'
							children={<FiSearch color='gray' />}
						/>
						<Input
							type='number'
							placeholder='Search'
							borderRadius='10px'
						/>
					</InputGroup>
				</Heading>
				<Text color='gray' fontSize='sm'>
					Request
				</Text>
				<Text fontWeight='bold' fontSize='2xl'>
					1450
				</Text>
				<MyChart />
				<Flex justifyContent='space-between' mt={8}>
					<Flex align='flex-end'>
						<Heading as='h2' size='lg' letterSpacing='tight'>
							Validaciones
						</Heading>
						<Text fontSize='small' color='gray' ml={4}>
							Fecha
						</Text>
					</Flex>
					<IconButton icon={<FiCalendar />} />
				</Flex>
				<Flex flexDir='column'>
					<Flex overflow='auto'>
						<Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='gray'>
									<Th>Canal</Th>
									<Th>Validador</Th>
									<Th>Tipo de Validación</Th>
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
									<Td>Validador 1</Td>
									<Td>Multiple</Td>
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
									<Td>Velidador 2</Td>
									<Td>Simple</Td>
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
									<Td>Validador 3</Td>
									<Td>Simple</Td>
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
											<Td>Validador 4</Td>
											<Td>Multiple</Td>
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
											<Td>Validador 5</Td>
											<Td>Multiple</Td>
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
											<Td>Validador 6</Td>
											<Td>Simple</Td>
											<Td>Aprobado</Td>
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
			</Flex>
		</Flex>
	)
}