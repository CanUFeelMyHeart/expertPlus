import React from "react";
import "./DoctorComponent.css";

export const DoctorComponent = (props) => {
  return (
    <div className="DoctorComponent">
      <div className="DoctorComponent__container">
        <div className="DoctorComponent__container_inner">
          <div className="DoctorComponent__image">
            <img
              src={props.image}
              alt=""
            />
          </div>
          <div className="DoctorComponent__info">
            <h2 className="DoctorComponent__info_header">{props.name}</h2>
            <h3 className="DoctorComponent__info_speciality">
              {props.speciality}
            </h3>
            <hr className="DoctorComponent__info_hr" />
            {props.doctorInfo.map((info, index) => (
              <div key={index}>
                <h3 className="DoctorComponent__info_subheader">
                  {info.header}
                </h3>
                {info.description.map((desc, index) => (
                  <h3
                    key={index}
                    className="DoctorComponent__info_subdescription"
                  >
                    {desc}
                  </h3>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
