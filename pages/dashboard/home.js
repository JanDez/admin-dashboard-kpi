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
} from "@chakra-ui/react"

import SideBar  from "../../components/layout/sideBar"
import MyChart  from "../../components/MyChart"
export default function Home() {
	
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
