import React from "react";
import { DoctorComponent } from "../../components/DoctorComponent/DoctorComponent";
import { doctors } from "../DoctorsPage/DoctorsData";
import "./DoctorDetailPage.css";
import {useParams} from "react-router-dom";

export const DoctorDetailPage = () => {
    const { id } = useParams();
    const doctor = doctors.find((doc) => doc.id === parseInt(id));

    if (!doctor) {
        return <div>Врач не найден</div>;
    }

    return (
        <>
            <h1 className="DoctorsPage__header">{doctor.name}</h1>
            <DoctorComponent
                image={doctor.image}
                speciality={doctor.speciality}
                doctorInfo={doctor.doctorInfo}
            />
        </>
    );
};
