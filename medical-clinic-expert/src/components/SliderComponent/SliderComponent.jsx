import React from "react";
import { SliderSectionComponent } from "./SliderSectionComponent";
import { comments } from "./SliderInfo";
import { carousel__navigation } from "./SliderNavInfo";
import "./SliderComponent.css";

export const SliderComponent = (props) => {
    return (
        <div className="sliderComponent__block">
            
            <div className="sectionComponent__block_carousel">
                <section className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">
                        {comments.map((comment, index) => (
                            <SliderSectionComponent
                                key={index}
                                name={comment.name}
                                image={comment.image}
                                id={comment.id}
                                href_prev={comment.href_prev}
                                href_next={comment.href_next}
                            />
                        ))}
                    </ol>
                    <aside className="carousel__navigation">
                        <ol className="carousel__navigation-list">
                            {carousel__navigation.map((nav, index) => (
                                <li
                                    key={index}
                                    className="carousel__navigation-item"
                                >
                                    <a
                                        href={nav.href}
                                        className="carousel__navigation-button"
                                    ></a>
                                </li>
                            ))}
                        </ol>
                    </aside>
                </section>
            </div>
        </div>
    );
};
