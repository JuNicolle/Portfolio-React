import React from 'react';
import HyundaiPhoto from "../assets/IMG_3058.jpg";
import HomeText from '../Components/HomeText';
import NavbarComponent from '../Components/Navbarcomponent';

const CVPage = () => {
    return <>
    <header className='cvReact'>
        <HomeText />
        <NavbarComponent />
    </header>



        <img src={HyundaiPhoto} alt="" />
    


    </>
}
 
export default CVPage;