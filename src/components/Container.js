import React from 'react'
import { Box, chakra, Flex } from '@chakra-ui/react'

const Container = (props) => {
    const { children } = props;

    return (
        <Flex
            width='100vw'
            height='100vh'
            justifyContent='center'
            alignItems='center'
            background='linear-gradient(to right, #00c6ff, #0072ff)'
        >
            <Box
                { ...props }
                w='95%'
                h='90%'
                background='#fff'
                boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
                overflowY='scroll'
                className='show__square'
            >
                { children }
            </Box>
        </Flex>
    )
}

export default Container