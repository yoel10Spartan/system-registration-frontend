import React from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, chakra, InputGroup, Text, useDisclosure } from '@chakra-ui/react'
import AlertMessage from './AlertMessage'
import FormRender from './FormRender'
import getMessage from '../utils/getMessage'
import { fileInputList, inputList } from '../assets/navigation/InputNavigation'

const FormRegister = () => {
    const disclosure = useDisclosure()

    const handlesSendData = (event) => {
        event.preventDefault()
        disclosure.onOpen()
    }

    const AlertWarning = (
        <Alert 
            status='warning'
            margin='20px 0'
            flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
            <AlertIcon />
            <AlertTitle>{getMessage('WARNING_LIST_OF_DOCTORS_TITLE')}</AlertTitle>
            <AlertDescription>
                {getMessage('WARNING_LIST_OF_DOCTORS_SUBTITLE')}{' '}
                <a 
                    href={getMessage('WARNING_LIST_OF_DOCTORS_URL')} 
                    target='_blank'
                >
                    {getMessage('WARNING_LIST_OF_DOCTORS_URL')}
                </a>
            </AlertDescription>
        </Alert>
    )

    const AlertInfo = (
        <Alert status='info'>
            <AlertIcon />
            <Text>
                {getMessage('DOWNLOAD_FILE_CALL')} {' '} 
                <a 
                    href={getMessage('DOWNLOAD_FILE_CALL_URL')}
                >
                    {getMessage('CLICK_HERE')}
                </a> 
            </Text>
        </Alert>
    )

    return (
        <FormContainer onSubmit={handlesSendData}>
            { AlertInfo }

            {
                inputList.map((input, i) => (
                    <FormRender key={i} { ...input } />
                ))
            }

            {
                fileInputList.map((input, i) => (
                    <FormRender key={i} { ...input } />
                ))
            }

            { AlertWarning }

            <Button 
                colorScheme='gray'
                width='100%'
                type='submit'
            >
                {getMessage('SEND')}
            </Button>

            <AlertMessage  { ...disclosure } />
        </FormContainer>
    )
}

export default FormRegister

const FormContainer = chakra('form')

const ReduxInputGroup = chakra(InputGroup, {
    baseStyle: {
        margin: '20px 0'
    }
})
