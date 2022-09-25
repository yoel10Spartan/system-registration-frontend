import React from 'react'
import Container from '../components/Container'
import { Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import FormRegister from '../components/FormRegister'

const Home = () => {
    return (
        <Container
            padding='20px'
        >
            <Banner />

            <Text
                textAlign='center'
                fontWeight='700'
            >
                REGISTRO DE ASPIRANTES A 
                CURSO ALTA ESPECILIDAD EN ENDOSCOPIA GINECOLOGICA
            </Text>

            <FormRegister />
        </Container>
    )
}

export default Home
