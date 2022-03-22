import React from 'react'
import "./Service.css"

//Images
import SImg1 from "./img/SImg1.svg"
import SImg2 from "./img/SImg2.svg"
import SImg3 from "./img/SImg3.svg"


function index() {
    return (
        <div className="services-wrapper">
            <ServiceCard img={SImg1} title="60 min Delivery" text = "Blowzy red vixens fight for a quick jump" />
            <ServiceCard img={SImg2} title="Best Shefs" text = "Blowzy red vixens fight for a quick jump" />
            <ServiceCard img={SImg3} title="Fresh Ingredients" text = "Blowzy red vixens fight for a quick jump" />

        </div>
    )
}

const ServiceCard = ({img, title, text}) => {
    return(
        <div className="service-card">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default index
