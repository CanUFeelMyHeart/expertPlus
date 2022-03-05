import React from "react";
import { CarouselSectionComponent } from "./CarouselSectionComponent";
import { comments } from "./ReviewsInfo";
import { carousel__navigation } from "./NavInfo";
import "./ReviewsComponent.css";

export const ReviewsComponent = (props) => {
    return (
        <div className="reviewsComponent__block">
            <h2 className="reviewsComponent__block_header">Отзывы клиентов</h2>
            <div className="reviewsComponent__block_carousel">
                <section className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">
                        {comments.map((comment, index) => (
                            <CarouselSectionComponent
                                key={index}
                                name={comment.name}
                                description={comment.description}
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
