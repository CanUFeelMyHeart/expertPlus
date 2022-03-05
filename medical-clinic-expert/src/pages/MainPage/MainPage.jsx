import React from "react";
import { AboutClinicComponent as AboutClinic } from "../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from '../../components/ServicesComponent/ServicesComponent'
import { ReviewsComponent } from '../../components/ReviewsComponent/ReviewsComponent'

export const MainPage = () => {
    return (
        <>
            <div>
                MAIN PAGEEEEEEEEEEEEEE
                <AboutClinic />
                <ServicesComponent />
                <ReviewsComponent/>
            </div>
        </>
    );
};
