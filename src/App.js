import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import HomeRouter from './routes/HomeRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

const App = () => {
    return (
        <ChakraProvider>
            <HomeRouter />
        </ChakraProvider>
    )
}

export default App