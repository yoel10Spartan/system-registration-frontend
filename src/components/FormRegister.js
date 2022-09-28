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
            background='#000'
            color='#fff'
        >
            <AlertIcon />
            <AlertTitle>{getMessage('WARNING_LIST_OF_DOCTORS_TITLE')}</AlertTitle>
            <AlertDescription>
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
        <a 
            href={getMessage('DOWNLOAD_FILE_CALL_URL')}
        >
            <Alert 
                status='info'
                background='#000'
                color='#fff'
                margin='20px 0'
            >
                <AlertIcon />
                <Text>
                    {getMessage('DOWNLOAD_FILE_CALL')} {' '} 
                </Text>
            </Alert>
        </a> 
    )

    return (
        <FormContainer onSubmit={handlesSendData}>
            { AlertInfo }

            {
                inputList.map((input, i) => (
                    <FormRender key={i} { ...input } />
                ))
            }

            <Text
                textAlign='center'
                fontWeight='600'
            >
                FAVOR DE AGREGAR LOS SIGUIENTES DOCUMENTOS:
            </Text>

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
