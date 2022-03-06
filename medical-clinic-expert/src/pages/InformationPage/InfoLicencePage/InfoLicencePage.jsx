import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import pic1 from "../../../assets/images/1.jpg";
import pic2 from "../../../assets/images/2.jpg";
import pic3 from "../../../assets/images/3.jpg";
import pic4 from "../../../assets/images/4.jpg";
import pic5 from "../../../assets/images/5.jpg";
import pic6 from "../../../assets/images/6.jpg";
import "./InfoLicencePage.css";

export const InfoLicencePage = () => {
    return (
        <div className="InfoLicencePage">
            <InformationContainerComponent header="Лицензии">
                <div className="InfoLicencePage__container">
                    <div className="InfoLicencePage__picture">
                        <a href={pic1} target="_blank">
                            <img src={pic1} />
                        </a>
                    </div>
                    <div className="InfoLicencePage__picture">
                        <a href={pic2} target="_blank">
                            <img src={pic2} />
                        </a>
                    </div>
                    <div className="InfoLicencePage__picture">
                        <a href={pic5} target="_blank">
                            <img src={pic5} />
                        </a>
                    </div>
                    <div className="InfoLicencePage__picture">
                        <a href={pic6} target="_blank">
                            <img src={pic6} />
                        </a>
                    </div>
                    <div className="InfoLicencePage__picture">
                        <a href={pic3} target="_blank">
                            <img src={pic3} />
                        </a>
                    </div>
                    <div className="InfoLicencePage__picture">
                        <a href={pic4} target="_blank">
                            <img src={pic4} />
                        </a>
                    </div>
                </div>
            </InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
