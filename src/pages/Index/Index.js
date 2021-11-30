import React, {useState} from 'react';

import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
// import Clients from '../../components/Clients/clients';
import Features from '../../components/Features/features';
import Services from '../../components/Services/services';
import WebsiteDescription from '../../components/Website Description/website-description';
import AboutUs from '../../components/About Us/about-us';
import Pricing from '../../components/Pricing/pricing';
import Testimonials from '../../components/Testimonials/testimonials';
import GetStarted from '../../components/Get Started/get-started';
import ContactUs from '../../components/Contact Us/contact-us';
import Footer from '../../components/Footer/footer';

const Index = () => {

    const [navClass, setNavClass] = useState([]);

        return (
            <React.Fragment>

                <NavbarPage navClass={navClass}/>

                <Section/>

                {/* <Clients/> */}

                <Features/>

                <Services/>

                <WebsiteDescription/>

                <AboutUs/>

                {/* <Pricing/> */}

                <Testimonials/>

                <GetStarted/>

                <ContactUs/>
                
                <Footer/>

            </React.Fragment>
        );
}

export default Index;