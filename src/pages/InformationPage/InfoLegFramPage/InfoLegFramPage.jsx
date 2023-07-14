import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import ogrn from "../../../assets/images/documents/ogrn.jpg";
import ustav2 from "../../../assets/images/documents/ustav1.jpg";
import ustav3 from "../../../assets/images/documents/ustav2.jpg";
import "./InfoLegFramPage.css";

export const InfoLegFramPage = () => {
  return (
    <div className="InfoLegFramPage">
      <InformationContainerComponent header="Законодательная база">
        <div className="InfoLegFramPage__container">
          <div className="InfoLegFramPage__picture">
            <a href={ogrn} target="_blank" rel="noreferrer">
              <img src={ogrn} alt="ogrn" />
            </a>
          </div>
          <div className="InfoLegFramPage__picture">
            <a href={ustav2} target="_blank" rel="noreferrer">
              <img src={ustav2} alt="ustav2" />
            </a>
          </div>
          <div className="InfoLegFramPage__picture">
            <a href={ustav3} target="_blank" rel="noreferrer">
              <img src={ustav3} alt="ustav3" />
            </a>
          </div>
        </div>
      </InformationContainerComponent>
    </div>
  );
};
