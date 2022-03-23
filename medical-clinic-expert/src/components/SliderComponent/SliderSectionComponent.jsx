import React from "react";
import "./SliderComponent.css";

export const SliderSectionComponent = (props) => {
    return (
        <li id={props.id} tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
                <a href={props.href_prev} className="carousel__prev">
                    Go to last slide
                </a>

                <a href={props.href_next} className="carousel__next">
                    Go to next slide
                </a>
            </div>
            <div className="carousel__slide_text">
                <div className="carousel__slide_description">{props.description}</div>
                
                <div className="carousel__slide_name"><img src={props.image} alt="" /></div>
            </div>
        </li>
    );
};
