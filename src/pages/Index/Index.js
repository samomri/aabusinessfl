import React, {useState} from 'react';

import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Clients from '../../components/Clients/clients';
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

                {/* Importing Navbar */}
                <NavbarPage navClass={navClass}/>

                {/* Importing Section */}
                <Section/>
                
                {/* Importing Client */}
                {/* <Clients/> */}
                
                {/* Importing Features */}
                <Features/>

                {/* Importing Services */}
                <Services/>

                {/* Importing Website Description */}
                <WebsiteDescription/>

                {/* Importing About Us */}
                <AboutUs/>

                {/* Importing Pricing */}
                {/* <Pricing/> */}

                {/* Importing Testimonials */}
                <Testimonials/>

                {/* Importing Get Started */}
                <GetStarted/>

                {/* Importing Blog */}

                {/* Importing Contact Us */}
                <ContactUs/>

                {/* Importing Get Footer */}
                <Footer/>

            </React.Fragment>
        );
}

export default Index;