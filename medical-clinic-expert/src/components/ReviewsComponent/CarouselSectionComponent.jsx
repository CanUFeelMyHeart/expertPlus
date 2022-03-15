import React from "react";
import "./ReviewsComponent.css";

export const CarouselSectionComponent = (props) => {
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
                <br/>
                <div className="carousel__slide_name">{props.name}</div>
            </div>
        </li>
    );
};
