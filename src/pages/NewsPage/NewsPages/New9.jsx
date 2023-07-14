import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const New9 = () => {
  return (
    <div className="specific_new_page">
      <InformationContainerComponent header="Внимание! Открыты вакансии: Медсестра и Администратор">
        <div className="NewPage__text">
          <h3 className="NewPage__text">
            Открыты вакансии на должности медсестры и администратора.
            Подробности по телефону +7 (8442) 50-88-77
          </h3>
        </div>
      </InformationContainerComponent>
    </div>
  );
};
