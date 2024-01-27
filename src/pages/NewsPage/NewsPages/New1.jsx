import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import "./NewStyles.css";
export const New1 = () => {
  return (
    <div className="specific_new_page">
      <InformationContainerComponent header="C января 2024 года в клинике Эксперт оказывают услуги физиотерапии с применением аппарата ударно-волновой терапии от компании BTL">
        <div className="NewPage__text">
          <div className="NewPage__text">
            Ударно-волновая терапия — метод лечения позвоночника и суставов. Это воздействие акустических волн на пораженный участок. 
            Волны вызывают размягчение и разрушение костных выростов, очагов уплотнения и спазмов в мышцах. 
            Ударно-волновая терапия снимает воспаление, улучшает кровообращение и работоспособность мышц.
          </div>
        </div>
      </InformationContainerComponent>
    </div>
  );
};
