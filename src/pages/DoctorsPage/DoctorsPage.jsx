import React from "react";
import { DoctorComponent } from "../../components/DoctorComponent/DoctorComponent";
import { doctors } from "./DoctorsData";
import "./DoctorsPage.css";

export const DoctorsPage = () => {
   return (
      <>
         <h1 className="DoctorsPage__header">Сотрудники</h1>
         {doctors.map((doctor, index) => (
            <DoctorComponent
               key={index}
               image={doctor.image}
               name={doctor.name}
               speciality={doctor.speciality}
               doctorInfo={doctor.doctorInfo}
            />
         ))}
      </>
   );
};
