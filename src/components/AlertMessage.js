import React from 'react'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'

const AlertMessage = ({ isOpen, onClose }) => {
    const cancelRef = React.useRef()
    
    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            ¡Envio exitoso!
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Tu informacion ha sido enviada de forma correcta. ¡Suerte!
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme='blue' onClick={onClose} ml={3}>
                                Aceptar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default AlertMessage