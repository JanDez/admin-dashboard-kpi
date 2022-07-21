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
	Tr, 
	Th,
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
								<Tr color='white'>
									<Th>Canal</Th>
									<Th>Validador</Th>
									<Th>Tipo de Validación</Th>
									<Th>Status</Th>
								</Tr>
							</Thead>
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
