import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import ogrn from "../../../assets/images/ogrn.jpg";
import ustav2 from "../../../assets/images/ustav1.jpg";
import ustav3 from "../../../assets/images/ustav2.jpg";
import './InfoLegFramPage.css'

export const InfoLegFramPage = () => {
    return (
        <div className="InfoLegFramPage">
            <InformationContainerComponent header="Законодательная база">
                <div className="InfoLegFramPage__container">
                    <div className="InfoLegFramPage__picture">
                        <a href={ogrn} target="_blank">
                            <img src={ogrn} />
                        </a>
                    </div>
                    <div className="InfoLegFramPage__picture">
                        <a href={ustav2} target="_blank">
                            <img src={ustav2} />
                        </a>
                    </div>
                    <div className="InfoLegFramPage__picture">
                        <a href={ustav3} target="_blank">
                            <img src={ustav3} />
                        </a>
                    </div>
                </div>
            </InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
