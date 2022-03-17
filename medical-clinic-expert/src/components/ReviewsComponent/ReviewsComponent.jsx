import React from "react";
import { CarouselSectionComponent } from "./CarouselSectionComponent";
import { comments } from "./ReviewsInfo";
import { carousel__navigation } from "./NavInfo";
import "./ReviewsComponent.css";

export const ReviewsComponent = (props) => {
  const aaaaaa = (e) => {
    e.preventDefault();
  };
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
        </section>
      </div>
    </div>
  );
};
