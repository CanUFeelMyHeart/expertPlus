import React from "react";
import { CarouselSectionComponent } from "./CarouselSectionComponent";
import { comments } from "./ReviewsInfo";
import "./ReviewsComponent.css";
import Carousel from "react-material-ui-carousel";

export const ReviewsComponent = (props) => {
  return (
    <div className="reviewsComponent__block">
      <h2 className="reviewsComponent__block_header">Отзывы клиентов</h2>
      <div className="reviewsComponent__block_carousel">
        <Carousel
          fullHeightHover={false}
          swipe={false}
          indicatorContainerProps={{
            style: {
              marginTop: "10px", // 5
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
