import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Text,
	Table, 
	Thead,
	Tbody,
	Tr, 
	Th,
	Td,
	Flex,
	Box,
	Center,

} from "@chakra-ui/react"

import * as React from "react"
export default function KeysModal() {

	const OverlayTwo = () => (
		<ModalOverlay
			bg='none'
			backdropFilter='auto'
			backdropInvert='80%'
			backdropBlur='2px'
		/>
	)

	const { isOpen, onOpen, onClose } = useDisclosure()
  	const [overlay, setOverlay] = React.useState(<OverlayTwo />)

	return (
		<>
			<Button
				ml='4'
				onClick={() => {
					setOverlay(<OverlayTwo />)
					onOpen()
				}}>
				Mostrar Llave
			</Button>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalContent
					h='650px'
					minW='1400px'
					bgGradient={[
						"linear(to-tr, teal.300, yellow.400)",
						"linear(to-t, blue.200, teal.500)",
						"linear(to-b, orange.100, purple.300)",
					]}>
					<ModalHeader>Llaves del Canal 1</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='black'>
									<Th>Llave Pública</Th>
									<Th>Llave Privada</Th>
									<Th>Activo Desde:</Th>
									<Th>Valida Hasta</Th>
									<Th>Acciones</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>Nombre del Archivo</Td>
									<Td>Nombre del Archivo </Td>
									<Td>18-5-2022</Td>
									<Td>18-8-2022</Td>
									<Td>
										<Button m={1} colorScheme='yellow'>
											Modificar
										</Button>
									
										<Button m={1} colorScheme='red'>
											Descargar Público
										</Button>
										<Button m={1} colorScheme='red'>
											Descargar Privada
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td>Nombre del Archivo</Td>
									<Td>Nombre del Archivo </Td>
									<Td>18-5-2022</Td>
									<Td>18-8-2022</Td>
									<Td>
										<Button m={1} colorScheme='yellow'>
											Modificar
										</Button>
										<Button m={1} colorScheme='red'>
											Eliminar
										</Button>
										<Button m={1} colorScheme='red'>
											Descargar Público
										</Button>
										<Button m={1} colorScheme='red'>
											Descargar Privada
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td>Nombre del Archivo</Td>
									<Td>Nombre del Archivo </Td>
									<Td>18-5-2022</Td>
									<Td>18-8-2022</Td>
									<Td>
										<Button m={1} colorScheme='yellow'>
											Modificar
										</Button>
										<Button m={1} colorScheme='red'>
											Eliminar
										</Button>
										<Button m={1} colorScheme='red'>
											Descargar Público
										</Button>
										<Button m={1} colorScheme='red'>
											Descargar Privada
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td>Nombre del Archivo</Td>
									<Td>Nombre del Archivo </Td>
									<Td>18-5-2022</Td>
									<Td>18-8-2022</Td>
									<Td>
										<Button m={1} colorScheme='yellow'>
											Modificar
										</Button>
										<Button m={1} colorScheme='red'>
											Descargar Público
										</Button>
										<Button m={1} colorScheme='red'>
											Descargar Privada
										</Button>
									</Td>
								</Tr>
							</Tbody>
						</Table>
						<Box>
							<Button m={5} colorScheme='whatsapp'>
								Agregar Nueva
							</Button>
						</Box>
					</ModalBody>
					<ModalFooter>
						<Button m={4} onClick={onClose}>
							Cerrar
						</Button>
						<Button m={4} variant='ghost'>
							Guardar Cambios
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
