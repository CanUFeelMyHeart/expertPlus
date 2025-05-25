import React from "react";
import "./DoctorComponent.css";
import { useNavigate } from "react-router-dom";

export const DoctorComponent = (props) => {
   const navigate = useNavigate();

   const onDoctorPageClick = () => {
      if (props.isClickable) {
         navigate(`/doctors/${props.id}`);
      }
   }

   return (
      <div className="DoctorComponent">
         <div className="DoctorComponent__container">
            <div className="DoctorComponent__container_inner">
               <div className="DoctorComponent__image">
                  <img src={props.image} alt="image" />
               </div>
               <div className="DoctorComponent__info">
                  {
                     props.name && <h2
                      className={`DoctorComponent__info_header ${props.isClickable ? 'DoctorComponent__info_header--active' : ''}`}
                      onClick={onDoctorPageClick}
                      >
                         {props.name}
                     </h2>
                  }
                  <div className="DoctorComponent__info_speciality">
                     {props.speciality}
                  </div>
                  <hr className="DoctorComponent__info_hr" />
                  {props.doctorInfo.map((info, index) => (
                     <div key={index}>
                        <div className="DoctorComponent__info_subheader">
                           {info.header}
                        </div>
                        {info.description.map((desc, index) => (
                           <div
                              key={index}
                              className="DoctorComponent__info_subdescription"
                           >
                              {desc}
                           </div>
                        ))}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
