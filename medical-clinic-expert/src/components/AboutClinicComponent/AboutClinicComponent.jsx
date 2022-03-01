import React from "react";
import { AboutClinicBlockComponent } from "./AboutClinicBlockComponent/AboutClinicBlockComponent";
import "./AboutClinicComponent.css";

export const AboutClinicComponent = () => {
    return (
        <div className="aboutClinic">
            <h1 className="aboutClinic__header">О клинике</h1>
            <h2 className="aboutClinic__description">
                Клиника «Эксперт плюс» находится в самом центре Красноармейского
                района и готова оказать профессиональную, доступную для всех
                категорий жителей, медицинскую помощь.
            </h2>
            <br />
            <h2 className="aboutClinic__description">
                Опытные и внимательные врачи, используя оборудование последнего
                поколения, проведут качественную диагностику, по результатам
                которой разработают для Вас индивидуальную схему лечения.
            </h2>
            <div className="aboutClinic__aboutClinicBlockComponent">
                <AboutClinicBlockComponent />
                <AboutClinicBlockComponent />
                <AboutClinicBlockComponent />
                <AboutClinicBlockComponent />
            </div>
        </div>
    );
};
