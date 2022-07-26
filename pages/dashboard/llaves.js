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
} from "@chakra-ui/react"
import {
	FiCalendar,
	FiChevronDown,
	FiChevronUp,
	FiPlus,
} from "react-icons/fi"

import SideBar from "../../components/layout/sideBar"
export default function Llaves() {
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
					<SideBar />
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
					Lista de Llaves{" "}
					<Flex display='inline-flex' fontWeight='bold'></Flex>
				</Heading>
				<Flex justifyContent='space-between' mt={8}>
					<Flex align='flex-end'>
						<Heading as='h2' size='lg' letterSpacing='tight'>
							Canales Mas Activos
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
				<Heading letterSpacing='tight'>Actividad</Heading>
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
						<Text>Solicitudes</Text>
						<Text fontWeight='bold'>1400</Text>
					</Flex>
					<Flex justify='space-between'>
						<Text>Solicitudes Aprobadas</Text>
						<Text fontWeight='bold'>3000</Text>
					</Flex>
					<Flex justify='space-between'>
						<Text>Solicitudes Denegadas</Text>
						<Text fontWeight='bold'>3000</Text>
					</Flex>
					<Flex justify='space-between'>
						<Text>Solicitudes Simples</Text>
						<Text fontWeight='bold'>3000</Text>
					</Flex>
					<Flex justify='space-between'>
						<Text>Solicitudes Multiples</Text>
						<Text fontWeight='bold'>3000</Text>
					</Flex>
				</Flex>
				<Heading letterSpacing='tight' size='md' my={4}>
					Canales Mas Activos
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
				<Heading letterSpacing='tight' size='md' my={4}>
					Validadores Mas Activos
				</Heading>
				<Flex>
					<AvatarGroup size='md' max={3}>
						<Avatar src='avatar-3.jpg' />
						<Avatar src='avatar-4.jpg' />
						<Avatar src='avatar-2.jpg' />
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
