import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import HomeRouter from './routes/HomeRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { ServerProvider } from './management/ServerProvider';

const App = () => {
    return (
        <ServerProvider>
            <ChakraProvider>
                <HomeRouter />
            </ChakraProvider>
        </ServerProvider>
    )
}

export default App