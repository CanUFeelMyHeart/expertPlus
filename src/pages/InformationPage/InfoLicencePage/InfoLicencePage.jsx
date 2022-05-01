import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import pic1 from "../../../assets/images/documents/1.jpg";
import pic2 from "../../../assets/images/documents/2.jpg";
import pic3 from "../../../assets/images/documents/3.jpg";
import pic4 from "../../../assets/images/documents/4.jpg";
import pic5 from "../../../assets/images/documents/5.jpg";
import pic6 from "../../../assets/images/documents/6.jpg";
import "./InfoLicencePage.css";

export const InfoLicencePage = () => {
  return (
    <div className="InfoLicencePage">
      <InformationContainerComponent header="Лицензии">
        <div className="InfoLicencePage__container">
          <div className="InfoLicencePage__picture">
            <a href={pic1} target="_blank" rel="noreferrer">
              <img src={pic1} alt="licence1" />
            </a>
          </div>
          <div className="InfoLicencePage__picture">
            <a href={pic2} target="_blank" rel="noreferrer">
              <img src={pic2} alt="licence2" />
            </a>
          </div>
          <div className="InfoLicencePage__picture">
            <a href={pic5} target="_blank" rel="noreferrer">
              <img src={pic5} alt="licence5" />
            </a>
          </div>
          <div className="InfoLicencePage__picture">
            <a href={pic6} target="_blank" rel="noreferrer">
              <img src={pic6} alt="licence6" />
            </a>
          </div>
          <div className="InfoLicencePage__picture">
            <a href={pic3} target="_blank" rel="noreferrer">
              <img src={pic3} alt="licence3" />
            </a>
          </div>
          <div className="InfoLicencePage__picture">
            <a href={pic4} target="_blank" rel="noreferrer">
              <img src={pic4} alt="licence4" />
            </a>
          </div>
        </div>
      </InformationContainerComponent>
    </div>
  );
};
