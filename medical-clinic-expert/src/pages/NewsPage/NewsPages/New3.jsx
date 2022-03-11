import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const New3 = () => {
  return (
    <InformationContainerComponent header="В нашей клинике ведет прием врач сосудистый хирург Титаренко Андрей Юрьевич">
      <div className="NewPage__text">
        <h3 className="NewPage__text">
          В рамках <span className="text_bold">сосудистой хирургии </span>
          производится выявление
          <span className="text_bold">
            {" "}
            заболеваний кровеносных и лимфатических сосудов
          </span>
          , а также подбираются методы лечения и профилактики.
        </h3>
        <h3 className="NewPage__text">
          Заболевания, попадающие под компетенцию{" "}
          <span className="text_bold">сосудистого хирурга</span>:
        </h3>
        <ul className="NewPage_list">
          <li>атеросклероз</li>
          <li>аневризма аорты</li>
          <li>диабетическая ангиопатия (диабетическая стопа)</li>
          <li>инфаркт</li>
          <li>варикозное расширение вен</li>
          <li>инсульт</li>
          <li>варикоцеле</li>
          <li>ИБС(ишемическая болезнь сердца)</li>
          <li>артериовенозная мальформация</li>
          <li>артериовенозная фистула</li>
          <li>флебит</li>
          <li>тромбоз</li>
          <li>тромбофлебит</li>
          <li>стеноз артерий</li>
          <li>лимфостаз</li>
          <li>синдром Рейно и т.д.</li>
        </ul>
      </div>
    </InformationContainerComponent>
  );
};
