import React from 'react'
import { chakra, Input, InputGroup, InputLeftAddon, InputLeftElement, Select } from '@chakra-ui/react'
import getMessage from '../utils/getMessage'
import { Form } from 'react-bootstrap'

const FormRender = ({ type, ...otherProps }) => {

    const typeText = (
        <ReduxInputGroup>
            <Form.Label>{getMessage(otherProps.placeholder)}</Form.Label>
            <Input 
                type={type} 
                background='rgb(235, 245, 251)'
                borderRadius='15px'
            />
        </ReduxInputGroup>
    )

    const typeTel = (
        <ReduxInputGroup>
            <InputLeftAddon children={otherProps.ext} />
            <Input type={type} placeholder={getMessage(otherProps.placeholder)} />
        </ReduxInputGroup>
    )

    const typeOptions = (
        <ReduxInputGroup>
            <Select placeholder={getMessage('DEFAULT_VALUE_OPTIONS')}>
                {
                    otherProps.options?.map((op, i) => (
                        <option key={i} value={i}>{getMessage(op)}</option>
                    ))
                }
            </Select>
        </ReduxInputGroup>
    )

    const typeFile = (
        <ReduxInputGroup
            flexDirection='column'
        >
            <Form.Label>{getMessage(otherProps.label)}</Form.Label>
            <Form.Control type={type} />
        </ReduxInputGroup>
    )

    return (
        <>
            {type === 'text' && typeText}
            {type === 'number' && typeText}
            {type === 'email' && typeText}
            {type === 'tel' && typeTel}
            {type === 'options' && typeOptions}
            {type === 'file' && typeFile}
        </>
    )
}

export default FormRender

const ReduxInputGroup = chakra(InputGroup, {
    baseStyle: {
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'column'
    }
})
