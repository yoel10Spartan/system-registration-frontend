import React, { useState } from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, chakra, InputGroup, Text, useDisclosure } from '@chakra-ui/react'
import AlertMessage from './AlertMessage'
import FormRender from './FormRender'
import getMessage from '../utils/getMessage'
import { useForm } from "react-hook-form";
import { BsFillPersonLinesFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const FormRegister = () => {
    const { register, handleSubmit } = useForm();
    const [valueSystem, setValueSystem] = useState(null);

    const valuesHiddeForSystemSelect = [2, 5]

    const inputList = [
        {
            type: 'text',
            icon: <BsFillPersonLinesFill />,
            placeholder: 'NAME_PLACEHOLDER',
            register: register("name", { required: true })
        },
        {
            type: 'text',
            icon: <BsFillPersonCheckFill />,
            placeholder: 'LAST_NAME_PLACEHOLDER',
            register: register("lastname", { required: true })
        },
        {
            type: 'email',
            icon: <MdEmail />,
            placeholder: 'EMAIL_PLACEHOLDER',
            register: register("email", { required: true })
        },
        {
            type: 'number',
            ext: '+52',
            placeholder: 'CELLPHONE_PLACEHOLDER',
            register: register("cellphone", { required: true })
        },
        {
            type: 'options',
            options: [
                'SPECIALITY',
                'SUSSPECIALTY',
                'HIGHSPECIALITY',
                'NOT_APPLICABLE'
            ],
            defaultMessage: 'DEFAULT_VALUE_OPTIONS',
            register: register("system", { required: true }),
            onChange: (e) => {setValueSystem(e.target.value);}
        }
    ]
    
    const fileInputList = [
        {
            type: 'file',
            label: '1_LABEL_FILE'
        },
        {
            type: 'file',
            label: '2_LABEL_FILE'
        },
        {
            type: 'file',
            label: '3_LABEL_FILE'
        },
        {
            type: 'file',
            label: '4_LABEL_FILE'
        },
        {
            type: 'file',
            label: '5_LABEL_FILE'
        },
        {
            type: 'file',
            label: '6_LABEL_FILE'
        },
        {
            type: 'file',
            label: '7_LABEL_FILE'
        },
        {
            type: 'file',
            label: '8_LABEL_FILE'
        },
    ]

    const disclosure = useDisclosure()

    const handleSendData = (data) => {
        disclosure.onOpen();
        console.log(data);
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
        <FormContainer onSubmit={handleSubmit(handleSendData)}>
            { AlertInfo }

            {
                inputList.map((input, i) => (
                    <FormRender 
                        key={i} 
                        { ...input } 
                    />
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
                    (
                        !(valueSystem === '0' || valueSystem === '1')
                            &&
                        (valuesHiddeForSystemSelect.indexOf(i) !== -1)
                    )
                    ? (
                        null
                    )
                    : ( 
                        <FormRender 
                            key={i} 
                            { ...input } 
                        />
                    )
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
