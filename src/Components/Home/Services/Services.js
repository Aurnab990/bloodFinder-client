import React from 'react';
import '../Services/Services.css';

const Services = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src='https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/rapid-pass-homepage.jpg.transform/1288/q82/feature/image.jpeg'></img>
                <h1>Start Your RapidPass</h1>
                <p>Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location.</p>
                <button>START NOW</button>
            </div>
            <div className="card">
                <img src='https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/donate-blood-eligibility.jpg.transform/1288/q82/feature/image.jpeg'></img>
                <h1>Eligible to Donate?</h1>
                <p>Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications, tattoos, and more.</p>
                <button>LEARN MORE</button>
            </div>
            <div className="card">
                <img src='https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/sc_hp_image_v2_copy.jpg.img.jpeg'></img>
                <h1>Help Patients</h1>
                <p>Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need.</p>
                <button>LEARN MORE</button>
            </div>
        </div>
    );
};

export default Services;
