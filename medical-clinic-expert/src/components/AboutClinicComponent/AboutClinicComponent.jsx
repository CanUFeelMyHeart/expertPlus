import React from "react";
import { AboutClinicBlockComponent } from "./AboutClinicBlockComponent/AboutClinicBlockComponent";
import { aboutClinicInfo } from "./AboutClinicInfo";
import "./AboutClinicComponent.css";

export const AboutClinicComponent = (props) => {
    return (
        <div className="aboutClinic">
            <h2 className="aboutClinic__header">О клинике</h2>
            <h3 className="aboutClinic__description">
                Клиника «Эксперт плюс» находится в самом центре Красноармейского
                района и готова оказать профессиональную, доступную для всех
                категорий жителей, медицинскую помощь.
            </h3>
            <br />
            <h3 className="aboutClinic__description">
                Опытные и внимательные врачи, используя оборудование последнего
                поколения, проведут качественную диагностику, по результатам
                которой разработают для Вас индивидуальную схему лечения.
            </h3>
            <div className="aboutClinic__aboutClinicBlockComponent">
                {aboutClinicInfo.map((aboutClinicInfoBlock, index) => (
                    <AboutClinicBlockComponent key={index}
                        image={aboutClinicInfoBlock.image}
                        header={aboutClinicInfoBlock.header}
                        description={aboutClinicInfoBlock.description}
                        ulClassName={aboutClinicInfoBlock.ulClassName}
                        reff={aboutClinicInfoBlock.ref}
                    />
                ))}
            </div>
            <hr className="aboutClinic__hr"/>
        </div>
    );
};
