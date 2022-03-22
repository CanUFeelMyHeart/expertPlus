import React from "react";
import { AboutClinicComponent as AboutClinic } from "../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../components/ServicesComponent/ServicesComponent";
import { ReviewsComponent } from "../../components/ReviewsComponent/ReviewsComponent";
import { InformationComponent } from "../../components/InformationComponent/InformationComponent";

export const MainPage = () => {
  return (
    <>
      <div>
        <AboutClinic />
        <ServicesComponent />
        <InformationComponent />
        <ReviewsComponent />
      </div>
    </>
  );
};
