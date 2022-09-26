import React from 'react'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import getMessage from '../utils/getMessage'

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
                            {getMessage('SUCCEFUL_SEND')}
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            {getMessage('DESCRIPTION_SUCCEFUL_SEND_DATA')}
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme='blue' onClick={onClose} ml={3}>
                                {getMessage('OK_MESSAGE')}
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default AlertMessage