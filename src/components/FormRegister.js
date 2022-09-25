import React from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, chakra, Input, InputGroup, InputLeftAddon, InputLeftElement, Select, Text, useDisclosure } from '@chakra-ui/react'
import { BsFillPersonLinesFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { Form } from 'react-bootstrap'
import AlertMessage from './AlertMessage'

const FormRegister = () => {
    const disclosure = useDisclosure()

    const handlesSendData = (event) => {
        event.preventDefault()
        disclosure.onOpen()
    }

    return (
        <FormContainer onSubmit={handlesSendData}>
            <Alert 
                status='warning'
                margin='20px 0'
            >
                <AlertIcon />
                <AlertTitle>La publicación de la lista de médicos aceptados.</AlertTitle>
                <AlertDescription>
                    Puede ser consultada en la página <a href='https://www.femeg.com.mx/educacion' target='_blank'>https://www.femeg.com.mx/educacion</a>
                </AlertDescription>
            </Alert>

            <ReduxInputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<BsFillPersonLinesFill color='gray.300' />}
                />
                <Input type='text' placeholder='Nombre' />
            </ReduxInputGroup>
            <ReduxInputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<BsFillPersonCheckFill color='gray.300' />}
                />
                <Input type='text' placeholder='Apellidos' />
            </ReduxInputGroup>
            <ReduxInputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<MdEmail color='gray.300' />}
                />
                <Input type='text' placeholder='Email' />
            </ReduxInputGroup>
            <ReduxInputGroup>
                <InputLeftAddon children='+52' />
                <Input type='tel' placeholder='Numero de celular' />
            </ReduxInputGroup>
            <ReduxInputGroup>
                <Select placeholder='Seleccione una opción'>
                    <option value='1'>Especialidad</option>
                    <option value='2'>Subespecialidad</option>
                    <option value='3'>Alta Especialidad</option>
                </Select>
            </ReduxInputGroup>

            <Alert status='info'>
                <AlertIcon />
                <Text>
                    Descarga y lee el siguiente documento, antes de subir los documentos. {' '} 
                    <a href='#'>Click</a> 
                </Text>
            </Alert>

            <ReduxInputGroup
                flexDirection='column'
            >
                <Form.Label>Carta de motivos dirigida al Dr.  Jaime Alfredo Calderon Tapia</Form.Label>
                <Form.Control type="file" />
            </ReduxInputGroup>
            <ReduxInputGroup
                flexDirection='column'
            >
                <Form.Label>Identificación oficial escaneada por ambos lados (INE o Pasaporte)</Form.Label>
                <Form.Control type="file" />
            </ReduxInputGroup>
            <ReduxInputGroup
                flexDirection='column'
            >
                <Form.Label>Copia de constancia de seleccionado ENARM</Form.Label>
                <Form.Control type="file" />
            </ReduxInputGroup>
            <ReduxInputGroup
                flexDirection='column'
            >
                <Form.Label>Titulo y cédula profesional escaneados por ambos lados</Form.Label>
                <Form.Control type="file" />
            </ReduxInputGroup>
            <ReduxInputGroup
                flexDirection='column'
            >
                <Form.Label>Copia de calificaciones (historia académica, kardex, record de calificaciones, etc)</Form.Label>
                <Form.Control type="file" />
            </ReduxInputGroup>
            <ReduxInputGroup
                flexDirection='column'
            >
                <Form.Label>Carta de adscripción y aceptación de residente para realizar curso de especialización o subespecialización emitida por la Secretaria de Salud</Form.Label>
                <Form.Control type="file" />
            </ReduxInputGroup>
            <ReduxInputGroup
                flexDirection='column'
            >
                <Form.Label>Fotografía de estudio con vestimenta formal, de frente (NO selfie), fondo gris</Form.Label>
                <Form.Control type="file" />
            </ReduxInputGroup>
            <ReduxInputGroup
                flexDirection='column'
            >
                <Form.Label>Curriculum dividido</Form.Label>
                <Form.Control type="file" />
            </ReduxInputGroup>
            <Button 
                colorScheme='gray'
                width='100%'
                type='submit'
            >
                Enviar
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
