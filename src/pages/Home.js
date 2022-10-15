import React from 'react'
import Container from '../components/Container'
import { Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import FormRegister from '../components/FormRegister'
import getMessage from '../utils/getMessage'

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
                {getMessage('TITLE_PAGE')}
            </Text>

            <Text
                textAlign='center'
                fontWeight='700'
                margin='30px'
            >
                REGISTRO CERRADO, GRACIAS POR SU INTERES
            </Text>

            {/* <FormRegister /> */}
        </Container>
    )
}

export default Home
