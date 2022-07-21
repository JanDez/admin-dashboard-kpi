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
					</Flex>
					<Text color='gray' fontSize='2xl' w='500px' mt={8}>
						Filtrar Consulta por Fecha
					</Text>
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
					<Flex>
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
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
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
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
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
											<Icon
												as={FiFolderPlus}
												fontSize='2xl'
											/>
											<Text>Solicitudes</Text>
											<Text fontWeight='bold'>1400</Text>
										</Flex>
										<Flex justify='space-between'>
											<Icon
												as={FiCheckSquare}
												fontSize='2xl'
											/>
											<Text>Solicitudes Aprobadas</Text>
											<Text fontWeight='bold'>3000</Text>
										</Flex>
										<Flex justify='space-between'>
											<Icon
												as={FiXOctagon}
												fontSize='2xl'
											/>
											<Text>Solicitudes Denegadas</Text>
											<Text fontWeight='bold'>3000</Text>
										</Flex>
										<Flex justify='space-between'>
											<Icon
												as={FiSquare}
												fontSize='2xl'
											/>
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
						</Accordion>{" "}
						*/}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
