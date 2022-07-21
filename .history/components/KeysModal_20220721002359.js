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
	Heading,
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
					minW='1200px'
					bgGradient={[
						"linear(to-tr, teal.300, yellow.400)",
						"linear(to-t, blue.200, teal.500)",
						"linear(to-b, orange.100, purple.300)",
					]}>
					<ModalHeader>Lista de Llaves</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Table variant='unstyled' mt={4}>
							<Thead>
								<Tr color='black'>
									<Th>Canal</Th>
									<Th>Llave</Th>
									<Th>Activo Desde:</Th>
									<Th>Último Uso</Th>
									<Th>Acciones</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>
										<Flex align='center'>
											<Flex flexDir='column'>
												Canal 1
												{/* <Text
													fontSize='sm'
													color='gray'>
													Timestamp
												</Text> */}
											</Flex>
										</Flex>
									</Td>
									<Td>
										SHA256:YIoyzWCmJ3weVwjtEDFYTwSGHmjzM2m7XBlg
									</Td>
									<Td>18-5-2022</Td>
									<Td>La última semana</Td>
									<Td>
										<Button colorScheme='yellow'>
											Editar
										</Button>
										<Button colorScheme='yellow'>
											Editar
										</Button>
										<Button colorScheme='yellow'>
											Editar
										</Button>
									</Td>
									<Td>
										<KeysModal />
									</Td>
								</Tr>
							</Tbody>
						</Table>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
