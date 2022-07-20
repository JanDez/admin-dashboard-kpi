import React, { useState } from "react"
import {
	Flex,
	Heading,
	Avatar,
	AvatarGroup,
	Text,
	IconButton,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Divider,
	Button,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react"
import {
	FiCalendar,
	FiChevronDown,
	FiChevronUp,
	FiPlus,
	FiSearch,
	FiBell,
} from "react-icons/fi"
import MyChart from "./MyChart"

export default function Dashboard() {
	const [display, changeDisplay] = useState("hide")
	const [value, changeValue] = useState(1)
	return (
		<Flex>
			<Flex
				w={["100%", "100%", "60%", "60%", "55%"]}
				p='3%'
				flexDir='column'
				overflow='auto'
				minH='100vh'>
				<Heading fontWeight='normal' mb={4} letterSpacing='tight'>
					Bienvenido,{" "}
					<Flex display='inline-flex' fontWeight='bold'>
						Leo
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

			{/* Column 3 */}
			<Flex
				w={["100%", "100%", "30%"]}
				bgColor='#F5F5F5'
				p='3%'
				flexDir='column'
				overflow='auto'
				minW={[null, null, "300px", "300px", "400px"]}>
				<Flex alignContent='center'>
					{/* <IconButton
						icon={<FiBell />}
						fontSize='sm'
						bgColor='#fff'
						borderRadius='50%'
						p='10px'
					/>
					<Flex
						w={30}
						h={25}
						bgColor='#B57295'
						borderRadius='50%'
						color='#fff'
						align='center'
						justify='center'
						ml='-3'
						mt='-2'
						zIndex='100'
						fontSize='xs'>
						2
					</Flex> */}
				</Flex>
				<Heading letterSpacing='tight'>Actividad</Heading>
				{/* {value == 1 && (
					<Box
						borderRadius='25px'
						mt={4}
						w='100%'
						h='200px'
						bgGradient='linear(to-t, #B57295, #29259A)'>
						<Flex
							p='1em'
							color='#fff'
							flexDir='column'
							h='100%'
							justify='space-between'>
							<Flex
								justify='space-between'
								w='100%'
								align='flex-start'>
								<Flex flexDir='column'>
									<Text color='gray.400'>
										Current Balance
									</Text>
									<Text fontWeight='bold' fontSize='xl'>
										$5,750.20
									</Text>
								</Flex>
								<Flex align='center'>
									<Icon mr={2} as={FiCreditCard} />
									<Text>Rise.</Text>
								</Flex>
							</Flex>
							<Text mb={4}></Text>
							<Flex align='flex-end' justify='space-between'>
								<Flex>
									<Flex flexDir='column' mr={4}>
										<Text
											textTransform='uppercase'
											fontSize='xs'>
											Valid Thru
										</Text>
										<Text fontSize='lg'>12/23</Text>
									</Flex>
									<Flex flexDir='column'>
										<Text
											textTransform='uppercase'
											fontSize='xs'>
											CVV
										</Text>
										<Text fontSize='lg'>***</Text>
									</Flex>
								</Flex>
								<Icon as={FiCreditCard} />
							</Flex>
						</Flex>
					</Box>
				)}
				{value == 2 && (
					<Box
						borderRadius='25px'
						mt={4}
						w='100%'
						h='200px'
						bgGradient='linear(to-t, yellow.300, blue.500)'>
						<Flex
							p='1em'
							color='#fff'
							flexDir='column'
							h='100%'
							justify='space-between'>
							<Flex
								justify='space-between'
								w='100%'
								align='flex-start'>
								<Flex flexDir='column'>
									<Text color='gray.400'>
										Current Balance
									</Text>
									<Text fontWeight='bold' fontSize='xl'>
										$350.00
									</Text>
								</Flex>
								<Flex align='center'>
									<Icon mr={2} as={FiCreditCard} />
									<Text>Rise.</Text>
								</Flex>
							</Flex>
							<Text mb={4}>**** **** **** 8956</Text>
							<Flex align='flex-end' justify='space-between'>
								<Flex>
									<Flex flexDir='column' mr={4}>
										<Text
											textTransform='uppercase'
											fontSize='xs'>
											Valid Thru
										</Text>
										<Text fontSize='lg'>9/24</Text>
									</Flex>
									<Flex flexDir='column'>
										<Text
											textTransform='uppercase'
											fontSize='xs'>
											CVV
										</Text>
										<Text fontSize='lg'>***</Text>
									</Flex>
								</Flex>
								<Icon as={FiCreditCard} />
							</Flex>
						</Flex>
					</Box>
				)}
				{value == 3 && (
					<Box
						borderRadius='25px'
						mt={4}
						w='100%'
						h='200px'
						bgGradient='linear(to-t, orange.300, pink.600)'>
						<Flex
							p='1em'
							color='#fff'
							flexDir='column'
							h='100%'
							justify='space-between'>
							<Flex
								justify='space-between'
								w='100%'
								align='flex-start'>
								<Flex flexDir='column'>
									<Text color='gray.400'>
										Current Balance
									</Text>
									<Text fontWeight='bold' fontSize='xl'>
										$2,150.72
									</Text>
								</Flex>
								<Flex align='center'>
									<Icon mr={2} as={FiCreditCard} />
									<Text>Rise.</Text>
								</Flex>
							</Flex>
							<Text mb={4}>**** **** **** 8353</Text>
							<Flex align='flex-end' justify='space-between'>
								<Flex>
									<Flex flexDir='column' mr={4}>
										<Text
											textTransform='uppercase'
											fontSize='xs'>
											Valid Thru
										</Text>
										<Text fontSize='lg'>11/22</Text>
									</Flex>
									<Flex flexDir='column'>
										<Text
											textTransform='uppercase'
											fontSize='xs'>
											CVV
										</Text>
										<Text fontSize='lg'>***</Text>
									</Flex>
								</Flex>
								<Icon as={FiCreditCard} />
							</Flex>
						</Flex>
					</Box>
				)} */}
				<Flex justifyContent='center' mt={2}>
					<Button
						bgColor={value == 1 ? "gray.600" : "gray.400"}
						size='xs'
						mx={1}
						onClick={() => changeValue(1)}
					/>
					<Button
						bgColor={value == 2 ? "gray.600" : "gray.400"}
						size='xs'
						mx={1}
						onClick={() => changeValue(2)}
					/>
					<Button
						bgColor={value == 3 ? "gray.600" : "gray.400"}
						size='xs'
						mx={1}
						onClick={() => changeValue(3)}
					/>
				</Flex>
				<Flex flexDir='column' my={4}>
					<Flex justify='space-between' mb={2}>
						<Text>Requests</Text>
						<Text fontWeight='bold'>1400</Text>
					</Flex>
					<Flex justify='space-between'>
						<Text>Tiempo de respuesta</Text>
						<Text fontWeight='bold'>0.10</Text>
					</Flex>
				</Flex>
				<Heading letterSpacing='tight' size='md' my={4}>
					Bancos mas activos
				</Heading>
				<Flex>
					<AvatarGroup size='md' max={3}>
						<Avatar src='avatar-2.jpg' />
						<Avatar src='avatar-3.jpg' />
						<Avatar src='avatar-4.jpg' />
						<Avatar src='avatar-4.jpg' />
						<Avatar src='avatar-4.jpg' />
					</AvatarGroup>
					<Avatar
						icon={<FiPlus />}
						ml={2}
						color='#fff'
						bgColor='gray.300'
					/>
				</Flex>
			</Flex>
		</Flex>
	)
}
