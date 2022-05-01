import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const New2 = () => {
  return (
    <div className="specific_new_page">
      <InformationContainerComponent header="С декабря в клинике проводится новый вид обследования - ЭЭГ">
        <div className="NewPage__text">
          <h3 className="NewPage__text">
            <span className="text_bold">ЭЭГ</span> или
            <span className="text_bold"> Электроэнцефалограмма</span> - это
            способ фиксации биопотенциалов головного мозга с помощью
            специального аппарата - энцефалографа.
          </h3>
          <h3 className="NewPage__text">
            Процедура абсолютно безопасна, безболезненна и неимеет никаких
            противопоказаний
          </h3>
          <h3 className="NewPage__text">
            Обследование на энцефалографе назначается:
          </h3>
          <ul className="NewPage_list">
            <li>при определении причин судорожных состояний и припадков</li>
            <li>
              для определения эффективности проводимой терапии при эпилепсии
            </li>
            <li>при черепно-мозговых травмах, новообразованиях</li>
            <li>для контроля формирования функций головного мозга у детей</li>
            <li>при нарушениях сна, энурезе</li>
            <li>при обморокоподобных состояниях</li>
            <li>а также при проведении медосмотров</li>
          </ul>
        </div>
      </InformationContainerComponent>
    </div>
  );
};
