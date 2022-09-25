import React from 'react'
import { chakra, Flex, Image } from '@chakra-ui/react'
import logo1 from '../assets/images/logo1.PNG'
import logo2 from '../assets/images/logo2.PNG'
import logo3 from '../assets/images/logo3.PNG'

const Banner = () => {
    return (
        <Flex
            justifyContent='space-evenly'
            margin='10px'
        >
            <BannerImage src={ logo1 } alt='logo1' />
            <BannerImage src={ logo2 } alt='logo2' />
            <BannerImage src={ logo3 } alt='logo3' />
        </Flex>
    )
}

export default Banner

const BannerImage = chakra(Image, {
    baseStyle: {
        w: '150px',
        h: '150px'
    }
})