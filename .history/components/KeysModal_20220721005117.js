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
					h='600px'
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
									<Th>Llave</Th>
									<Th>Activo Desde:</Th>
									<Th>Último Uso</Th>
									<Th>Acciones</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>
										SHA256:YIoyzWCmJ3weVwjtEDFYTwSGHmjzM2m7XBlg
									</Td>
									<Td>18-5-2022</Td>
									<Td>La última semana</Td>
									<Td>
										<Button m={1} colorScheme='yellow'>
											Modificar
										</Button>
										<Button m={1} colorScheme='red'>
											Eliminar
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td>
										SHA256:YIoyzWCmJ3weVwjtEDFYTwSGHmjzM2m7XBlg
									</Td>
									<Td>18-5-2022</Td>
									<Td>La última semana</Td>
									<Td>
										<Button m={1} colorScheme='yellow'>
											Modificar
										</Button>
										<Button m={1} colorScheme='red'>
											Eliminar
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td>
										SHA256:YIoyzWCmJ3weVwjtEDFYTwSGHmjzM2m7XBlg
									</Td>
									<Td>18-5-2022</Td>
									<Td>La última semana</Td>
									<Td>
										<Button ml={1} colorScheme='yellow'>
											Modificar
										</Button>
										<Button mr={1} colorScheme='red'>
											Eliminar
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td>
										SHA256:YIoyzWCmJ3weVwjtEDFYTwSGHmjzM2m7XBlg
									</Td>
									<Td>18-5-2022</Td>
									<Td>La última semana</Td>
									<Td>
										<Button m={1} colorScheme='yellow'>
											Modificar
										</Button>
										<Button m={1} colorScheme='red'>
											Eliminar
										</Button>
									</Td>
								</Tr>
							</Tbody>
						</Table>
						<Box>
							<Button m={1} colorScheme='whatsapp'>
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
