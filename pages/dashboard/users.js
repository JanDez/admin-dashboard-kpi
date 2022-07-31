import React, { useState } from "react"
import {
	Flex,
	Heading,
	Text,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Box,
	Button,
	Input,
	Select,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react"
import {
	FiSearch,
} from "react-icons/fi"

import SideBar from "../../components/layout/sideBar"
export default function Bitacora() {
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
				<SideBar />
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
							w={"500px"}
							m={2}>
							<option value='option1'>Canal</option>
							<option value='option2'>Canal Validador</option>
							<option value='option3'>ID Petición</option>
							<option value='option3'>Operación</option>
						</Select>

						<InputGroup
							bgColor='#ECF1F7'
							mb={4}
							border='none'
							borderColor='#ECF1F8'
							borderRadius='10px'
							m={2}>
							<InputLeftElement
								pointerEvents='none'
								children={<FiSearch color='gray' />}
							/>
							<Input
								type='text'
								placeholder='Buscar'
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
								placeholder='Selecccione Fecha de Inicio'
								size='md'
								backgroundColor='#ffffff'
								type='datetime-local'
							/>
						</Box>
						<Box display='block'>
							<Input
								placeholder='Seleccione Fecha de Fin'
								size='md'
								backgroundColor='#ffffff'
								type='datetime-local'
							/>
						</Box>
					</Flex>
					<Button colorScheme='green' w={"80px"}>
						Buscar
					</Button>
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
							</Tbody>
						</Table>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
