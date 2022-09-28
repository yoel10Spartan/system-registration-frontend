import React from 'react'
import { BsFillPersonLinesFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const inputList = [
    {
        type: 'text',
        icon: <BsFillPersonLinesFill />,
        placeholder: 'NAME_PLACEHOLDER'
    },
    {
        type: 'text',
        icon: <BsFillPersonCheckFill />,
        placeholder: 'LAST_NAME_PLACEHOLDER'
    },
    {
        type: 'email',
        icon: <MdEmail />,
        placeholder: 'EMAIL_PLACEHOLDER'
    },
    {
        type: 'number',
        ext: '+52',
        placeholder: 'CELLPHONE_PLACEHOLDER'
    },
    {
        type: 'options',
        options: [
            'SPECIALITY',
            'SUSSPECIALTY',
            'HIGHSPECIALITY',
            'NOT_APPLICABLE'
        ],
        defaultMessage: 'DEFAULT_VALUE_OPTIONS'
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

export {
    inputList, 
    fileInputList
}