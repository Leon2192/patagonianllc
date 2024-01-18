import React from 'react'
import Banner from '../components/Banner/Banner'
import Galeria from '../components/Galeria/Galeria'
import Info from '../components/Info/Info'
import Contacto from '../components/Contacto/Contacto';

const Home = () => {
    return (
        <div>
            <Banner />
            <Galeria />
            <Info />
            <Contacto />
        </div>
    )
}

export default Home