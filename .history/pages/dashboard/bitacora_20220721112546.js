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
} from "react-icons/fi"

import { VscCalendar } from "react-icons/vsc"
export default function Bitacora() {
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
									<Icon
										as={FiBookOpen}
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
									href='/dashboard/bitacora'>
									<Text className='active'>Bitacora</Text>
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
				<Heading fontWeight='normal' mb={4} letterSpacing='tight'>
					Bitacora
				</Heading>
				<Flex flexDir='column'>
					<Text color='gray' fontSize='2xl' w='500px'>
						Tipo de Consulta
					</Text>
					<Flex justifyContent='left' mt={2} textAlign='center'>
						<Select
							variant='filled'
							placeholder='Tipo de Consulta'
							w={"500px"}>
							<option value='option1'>Canal</option>
							<option value='option2'>Canal Validador</option>
							<option value='option3'>ID Petición</option>
							<option value='option3'>Operación</option>
						</Select>

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
					</Flex>
					<Flex
						justifyContent='space-evenly'
						mt={2}
						textAlign='center'>
						<Text color='gray' fontSize='sm' w='255px'>
							Desde
						</Text>
						<Text color='gray' fontSize='sm' w='255px'>
							Hasta
						</Text>
					</Flex>
					<Flex overflow='auto' justifyContent='space-evenly'>
						<Box display='block'>
							<Input
								placeHolder='Selecccione Fecha de Inicio'
								size='md'
								backgroundColor='#ffffff'
								type='datetime-local'
							/>
						</Box>
						<Box display='block'>
							<Input
								placeHolder='Seleccione Fecha de Fin'
								size='md'
								backgroundColor='#ffffff'
								type='datetime-local'
							/>
						</Box>
					</Flex>
					<Button colorScheme='green' w={'40px'}>Buscar</Button>
					<Text color='gray' fontSize='2xl' w='500px' mt={8}>
						Resultado de Consulta
					</Text>
					<Flex>
						<Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='gray'>
									<Th>Fecha</Th>
									<Th>ID de Petición</Th>
									<Th>Operación</Th>
									<Th>Canal</Th>
									<Th>Canal Validador</Th>
									<Th>Resultado</Th>
									<Th>Resultado Validador</Th>
									<Th>Acción</Th>
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
									<Td>Info</Td>
									<Td>Info</Td>
									<Td>Info</Td>
									<Td>
										<Button colorScheme='blue'>
											Detalles
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
