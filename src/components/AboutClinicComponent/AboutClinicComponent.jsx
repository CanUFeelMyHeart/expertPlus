import React from "react";
import { AboutClinicBlockComponent } from "./AboutClinicBlockComponent/AboutClinicBlockComponent";
import { aboutClinicInfo } from "./AboutClinicInfo";
import "./AboutClinicComponent.css";

export const AboutClinicComponent = (props) => {
  return (
    <div className="aboutClinic container section">
      <div className="aboutClinic__text">
        <h2 className="h2">О клинике</h2>
        <div className="aboutClinic__description">
          Клиника «Эксперт плюс» находится в самом центре Красноармейского
          района и готова оказать профессиональную, доступную для всех категорий
          жителей, медицинскую помощь.
        </div>
        <br />
        <div className="aboutClinic__description">
          Опытные и внимательные врачи, используя оборудование последнего
          поколения, проведут качественную диагностику, по результатам которой
          разработают для Вас индивидуальную схему лечения.
        </div>
      </div>
      <div className="aboutClinic__aboutClinicBlockComponent">
        {aboutClinicInfo.map((aboutClinicInfoBlock, index) => (
          <AboutClinicBlockComponent
            key={index}
            image={aboutClinicInfoBlock.image}
            header={aboutClinicInfoBlock.header}
            description={aboutClinicInfoBlock.description}
            ulClassName={aboutClinicInfoBlock.ulClassName}
            reff={aboutClinicInfoBlock.ref}
          />
        ))}
      </div>
      <hr className="aboutClinic__hr" />
    </div>
  );
};
