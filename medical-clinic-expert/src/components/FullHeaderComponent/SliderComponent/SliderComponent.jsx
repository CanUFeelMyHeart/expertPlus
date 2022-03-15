import React from "react";
import "./SliderComponent.css";
import mainSlider from "../../../img/mainSlider.png"
import bg_fone from "../../../img/bg_fone.png"
// import Carousel from "react-bootstrap/Carousel" 

export const Carousel = ({children}) => {

    return (
        <>  
           <div className="main-container">
               <div className="window">
                    <div className="all-pages-container">
                        ({children})
                    </div>
               </div>
           </div>
        </>
    );
};
