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
				<ModalContent h='800px' w='1500px'>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>Custom backdrop filters!</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
