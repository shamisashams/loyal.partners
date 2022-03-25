import React, { useState, useEffect } from "react";

import "../../../css/App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroSection from "../../sections/HeroSection/HeroSection";
import Technology from "../../sections/Technology/Technology";
import Cloud from "../../sections/Cloud/Cloud";
import Services from "../../sections/Services/Services";
import SpecialOffers from "../../sections/SpecialOffers/SpecialOffers";
import AboutUs from "../../sections/AboutUs/AboutUs";
import Team from "../../sections/Team/Team";
import Partners from "../../sections/Partners/Partners";
import Layout from "../../Layouts/Layout";

const Home = ({ sliders,companies,team, seo, page }) => {
    console.log(page.file);
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
         <Layout seo={seo}>
            <div>
                {/*<Header />*/}
                {sliders.length>0 && <HeroSection sliders={sliders}/>}
                <Technology page={page} />
                <Cloud />
                <Services />
                <SpecialOffers />
                <AboutUs img={page.file}/>
                {team.length>0 && <Team team={team}/>}
                {companies.length>0 && <Partners companies={companies}/>}
                {/*<Footer />*/}
            </div>

         </Layout>
    );
};

export default Home;
