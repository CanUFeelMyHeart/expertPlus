import React from "react";
import { DoctorComponent } from "../../components/DoctorComponent/DoctorComponent";
import { doctors } from "./DoctorsInfo";
import "./DoctorsPage.css";

export const DoctorsPage = () => {
    return (
        <>
            <div className="DoctorsPage__header_container">
                <h1 className="DoctorsPage__header">Сотрудники</h1>
            </div>
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
