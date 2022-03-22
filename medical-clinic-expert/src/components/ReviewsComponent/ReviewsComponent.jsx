import React from "react";
import { CarouselSectionComponent } from "./CarouselSectionComponent";
import { comments } from "./ReviewsInfo";
import "./ReviewsComponent.css";
import Carousel from "react-material-ui-carousel";

export const ReviewsComponent = (props) => {
  return (
    <div className="reviewsComponent__block">
      <div className="reviewsComponent__block_header">
        <h2 className="reviewsComponent__block_header_inner">Отзывы клиентов</h2>
      </div>
      <div className="reviewsComponent__block_carousel">
        <Carousel
          swipe={false}
          navButtonsAlwaysInvisible={true}
          interval={6000}
          indicatorContainerProps={{
            style: {
              display: "none",
            },
          }}
        >
          {comments.map((comment, index) => (
            <CarouselSectionComponent
              key={index}
              name={comment.name}
              description={comment.description}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
