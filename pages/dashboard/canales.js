import React, { useState } from "react"
import {
	Flex,
	Heading,
	Text,
	IconButton,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Divider,
	Box,
	Button,
	ButtonGroup,
} from "@chakra-ui/react"
import {
	FiChevronDown,
	FiChevronUp,
} from "react-icons/fi"

import KeysModal from '../../components/modalsFolder/KeysModal'
import MyOperations from '../../components/modalsFolder/OperationsModal'
import SideBar from "../../components/layout/sideBar"

export default function Canales() {
	const [display, changeDisplay] = useState("hide")
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
					<SideBar />
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
					<ButtonGroup gap='4'>
						<Button colorScheme='green'>Agregar</Button>
					</ButtonGroup>
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
									<Td>
										<KeysModal />
									</Td>
									<Td>
										<MyOperations />
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

			{/* Column 3 */}
			{/* <Flex
				w={["100%", "100%", "30%"]}
				bgColor='none'
				p='3%'
				flexDir='column'
				overflow='auto'
				minW={[null, null, "300px", "300px", "400px"]}> */}
			{/* <Flex alignContent='center'>
					<IconButton
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
					</Flex>
				</Flex>
				<Heading mb={8} letterSpacing='tight'>
					Actividad Destacada
				</Heading>
				<Accordion mb={12} defaultIndex={[0]} allowMultiple>
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box flex='1' textAlign='left'>
									Canales con Mayor Actividad
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box flex='1' textAlign='left'>
									Validadores con Mayor Actividad
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Heading mb={6} letterSpacing='tight'>
					Resumen General de Actividades
				</Heading>
				<Accordion defaultIndex={[0]} allowMultiple>
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box flex='1' textAlign='left'>
									Canales con Mayor Actividad
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<Flex flexDir='column' my={4}>
								<Flex justify='space-between' mb={2}>
									<Icon as={FiFolderPlus} fontSize='2xl' />
									<Text>Solicitudes</Text>
									<Text fontWeight='bold'>1400</Text>
								</Flex>
								<Flex justify='space-between'>
									<Icon as={FiCheckSquare} fontSize='2xl' />
									<Text>Solicitudes Aprobadas</Text>
									<Text fontWeight='bold'>3000</Text>
								</Flex>
								<Flex justify='space-between'>
									<Icon as={FiXOctagon} fontSize='2xl' />
									<Text>Solicitudes Denegadas</Text>
									<Text fontWeight='bold'>3000</Text>
								</Flex>
								<Flex justify='space-between'>
									<Icon as={FiSquare} fontSize='2xl' />
									<Text>Solicitudes Simples</Text>
									<Text fontWeight='bold'>3000</Text>
								</Flex>
								<Flex justify='space-between'>
									<Icon as={FiGrid} fontSize='2xl' />
									<Text>Solicitudes Multiples</Text>
									<Text fontWeight='bold'>3000</Text>
								</Flex>
							</Flex>
						</AccordionPanel>
					</AccordionItem>
				</Accordion> */}
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
			{/* <Flex justifyContent='center' mt={2}>
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
				</Flex> */}
			{/* </Flex> */}
		</Flex>
	)
}
